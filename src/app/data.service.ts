import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // addSlide(): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
  //     tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  constructor(private http: HttpClient) {
    // this.loadData();
  }

  // Returns whatever get_slide_list.php provides.
  // .subscribe to get it!
  public getJSON(): Observable<any> {
    return this.http.get('http://sqm.immunohub.net/get_list.php')
      .pipe(map((res: any) => res));
  }

  public newSlide(posted) {
    this.http.post<any>(
      'http://sqm.immunohub.net/new_slide.php',
      posted,
    );
  }
}
