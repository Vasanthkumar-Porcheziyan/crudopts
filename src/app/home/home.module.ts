import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import { HBannerComponent } from './h-banner/h-banner.component';
import { HAboutusComponent } from './h-aboutus/h-aboutus.component';
import { HEnrollComponent } from './h-enroll/h-enroll.component';
import { HTestimonialsComponent } from './h-testimonials/h-testimonials.component';
import { HTrendingComponent } from './h-trending/h-trending.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: HomeComponent, pathMatch : 'full'
}];

@NgModule({
  declarations: [HomeComponent, HBannerComponent, HAboutusComponent, HEnrollComponent, HTestimonialsComponent, HTrendingComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
