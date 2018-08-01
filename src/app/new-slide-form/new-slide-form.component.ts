import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { concat } from '../../../node_modules/rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { DataService } from '../data.service';
import { SettingsService } from '../settings.service';

import { Slide } from '../slide';

@Component({
  selector: 'app-new-slide-form',
  templateUrl: './new-slide-form.component.html',
  styleUrls: ['./new-slide-form.component.css']
})
export class NewSlideFormComponent implements OnInit {
  newSlideForm = new FormGroup({
    caseNum: new FormControl(),
    blockNum: new FormControl(),
    stainName: new FormControl()
  });
  // // Temp properties of the slide
  // caseNum;
  // blockNum;
  // stainName;

  onAdd() {
    const tempSlide: Slide = {
      // caseNum: this.caseNum,
      // blockNum: this.blockNum,
      // stainName: this.stainName
      caseNum: this.newSlideForm.value['caseNum'],
      blockNum: this.newSlideForm.value['blockNum'],
      stainName: this.newSlideForm.value['stainName']
    };
    // Checks if slide is able to be added
    // If no, sends error message
    // If yes, Adds slide
    console.log(JSON.stringify(tempSlide));
    this.sendInfo(tempSlide);
  }

  sendInfo(posted): void {
    console.log('Posting to server');

    // POST TO SERVER
    this.dataService.newSlide(posted);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private dataService: DataService,
    private settingsService: SettingsService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

}
