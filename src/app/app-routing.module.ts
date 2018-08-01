import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSlideFormComponent } from './new-slide-form/new-slide-form.component';
import { SlideDisplayComponent } from './slide-display/slide-display.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: SlideDisplayComponent },
  { path: 'new', component: NewSlideFormComponent },
  // { path: 'edit/:slide_id', component: DisplayComponent },
  { path: '404', component: PageNotFoundComponent },

  { path: '**', redirectTo: '404' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
