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
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import { DataService } from '../app/data.service';
import { InfoComponent } from './info/info.component';
import { Form1Component } from './form1/form1.component';
import { PersonalComponent } from './personal/personal.component';
import { PerformanceComponent } from './performance/performance.component';
import { AddressComponent } from './address/address.component';
import { Structure1 } from './structure1';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    route,
    Form1Component,
    PersonalComponent,
    PerformanceComponent,
    AddressComponent,
    DataComponent
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
    MatTabsModule,
    MatTableModule,
    MatSelectModule

  ],
  providers: [DataService,Structure1],
  bootstrap: [AppComponent],
  entryComponents:[PersonalComponent,PerformanceComponent,AddressComponent]
})
export class AppModule { }
