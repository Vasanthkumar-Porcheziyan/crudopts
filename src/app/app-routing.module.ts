import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: 'home',
  loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'home', pathMatch : 'full'
    },
    {
    path: 'contactus',
    loadChildren: './contact-us/contact-us.module#ContactUsModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
