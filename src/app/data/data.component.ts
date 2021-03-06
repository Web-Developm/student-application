import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Structure1 } from '../structure1';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { map } from 'rxjs/operators';
//import { NavigationExtras } from "@angular/router";
//import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormGroup } from '@angular/forms';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';




@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class DataComponent implements OnInit {



  expandedElement!: Structure1 | null;

  location!: Location;

  constructor(public ds: DataService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog, location: Location) {
    this.location = location;
  }



  public list = new MatTableDataSource<Structure1>();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  personal1: string[] = ["id", "first", "last", "email", "gender", "phone", "percentage", "address", "profile", "update", "delete"];

  openState = false;

  addresstype = ['Temporary Address', 'Perment Address'];

  data: FormGroup = this.ds.personal;

  performance: FormGroup = this.ds.performance;

  address: FormGroup = this.ds.address;

  addressarray: FormArray = this.address.get('add') as FormArray;

  openDialog(primary: any, index: any) {
    this.dialog.open(DialogComponent, { data: primary, height: '650px', width: '600px' });

  }


  datlist() {
    this.ds.personaldata().subscribe(
      data => {
        this.list = data;
        console.log(data);
      }
    )
  }

  display() {
    console.log(this.ds.personal);
    console.log(this.ds.performance);
    console.log(this.ds.performance);
  }

  onSelect(element: Structure1) {
    this.router.navigate(['/result', JSON.stringify(element)]);
  }

  filter(event: Event) {
    const filterValue: any = (event.target as HTMLInputElement).value;
    this.list.filter = filterValue.trim().toLowerCase();
  }

  /*update1(primary: any) {
    this.data.patchValue({
      id: primary.id,
      first: primary.first,
      last: primary.last,
      email: primary.email,
      gender: primary.gender,
      phone: primary.phone
    });

    this.performance.patchValue({
      percentage: primary.percentage
    });

    this.addressarray.controls.forEach((element: any, index: any, array: any) => {

      primary.address.forEach((val: any, i: number) => {
        this.add();
        this.addressarray.at(i).patchValue(
          {
            city: val.city,
            street: val.street,
            pincode: val.pincode,
            state: val.state,
            country: val.country
          });

      });

    });

  }*/


  delete(id: any): void {
    let res = confirm("are you sure delete the record");

    if (res == true) {
      this.ds.delete(id).subscribe(
        data => {
          alert("Successfully delete the record");
          console.log(data);
          this.datlist();
        }
      )
    }

    else {
      alert("record aborted");
    }

  }



  add() {
    this.ds.add1();
  }

  remove(index: any) {
    this.ds.remove(index);
  }







  ngOnInit(): void {

    this.list.paginator = this.paginator;
    this.list.sort = this.sort;

    this.ds.personaldata().subscribe(
      data => {
        this.list.data = data;
        console.log(data);
      }
    )




  }

}
