import { Component, OnInit } from '@angular/core';
import { Slide } from '../slide';


@Component({
  selector: 'app-new-slide-form',
  templateUrl: './new-slide-form.component.html',
  styleUrls: ['./new-slide-form.component.css']
})
export class NewSlideFormComponent implements OnInit {

  caseNum;
  blockNum;
  stainName;

  onSubmit() {
    console.log('submit button clicked!');

    const tempSlide = new Slide();
    tempSlide.caseNum = this.caseNum;
    tempSlide.blockNum = this.blockNum;
    tempSlide.stainName = this.stainName;

    console.log(JSON.stringify(tempSlide));
    // TODO: post code to server
  }

  constructor() { }

  ngOnInit() {
  }

}
