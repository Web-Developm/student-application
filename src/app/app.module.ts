import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule, route } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { DataService } from '../app/data.service';
import { InfoComponent } from './info/info.component';
import { Form1Component } from './form1/form1.component';
import { PersonalComponent } from './personal/personal.component';
import { PerformanceComponent } from './performance/performance.component';
import { AddressComponent } from './address/address.component';
import { Structure1 } from './structure1';
import { DataComponent } from './data/data.component';
import { ResultComponent } from './result/result.component';
import { DialogComponent } from './dialog/dialog.component';

import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    route,
    Form1Component,
    PersonalComponent,
    PerformanceComponent,
    AddressComponent,
    DataComponent,
    ResultComponent,
    DialogComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [DataService, Structure1, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [PersonalComponent, PerformanceComponent, AddressComponent]
})
export class AppModule { }
