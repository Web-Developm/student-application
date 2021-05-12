import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InfoComponent } from '../app/info/info.component';
import { AddressComponent } from './address/address.component';
import { AuthGuard } from './auth.guard';
import { DataComponent } from './data/data.component';
import { Form1Component } from './form1/form1.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: 'login', component: InfoComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  {
    path: 'form', component: Form1Component, canActivate: [AuthGuard]
  },

  {
    path: "array", component: AddressComponent
  },
  {
    path: "data", component: DataComponent, canActivate: [AuthGuard]
  },

  {
    path: "result/:id", component: ResultComponent, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route = [InfoComponent, DataComponent, ResultComponent];
