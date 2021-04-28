import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../app/info/info.component';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  {
    path: 'login', component: InfoComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  {
    path:'form', component:Form1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route = [InfoComponent];
