import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';  // Apparently necessary imports
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { SettingsService } from '../settings.service';

import { Slide } from '../slide';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-slide-display',
  templateUrl: './slide-display.component.html',
  styleUrls: ['./slide-display.component.css']
})
export class SlideDisplayComponent implements OnInit {
  // Loading is true when the page is loading
  slideList: Slide[];

  displayedColumns: string[] = ['id', 'caseNum', 'stainName'];
  dataSource: MatTableDataSource<Slide>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private settingsService: SettingsService, private dataService: DataService) {
  }

  ngOnInit() {
    this.loadSlides();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadSlides() {  // Loads slide data
    this.dataService.getJSON().subscribe(data => {
      console.log('Loading slide list ...');

      this.slideList = data as Slide[];
      console.log(this.slideList);
      // Stores it as table data
      this.dataSource = new MatTableDataSource(this.slideList);

      // Sets up the paginator
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      error => console.log(error));
  }
}
