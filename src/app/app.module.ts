import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewSlideFormComponent } from './new-slide-form/new-slide-form.component';
import { SlideDisplayComponent } from './slide-display/slide-display.component';
import { LoginInfoComponent } from './login-info/login-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NewSlideFormComponent,
    SlideDisplayComponent,
    LoginInfoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
