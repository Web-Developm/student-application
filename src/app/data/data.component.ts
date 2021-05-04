import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Structure1 } from '../structure1';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { NavigationExtras } from "@angular/router";
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {



  expandedElement!: Structure1 | null;

  constructor(public ds: DataService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }



  public list = new MatTableDataSource<Structure1>();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  personal1: string[] = ["id", "first", "last", "email", "gender", "phone", "percentage", "address", "profile", "update", "delete"];

  openState = false;

  addresstype = ['Temporary Address', 'Perment Address'];

  data: FormGroup = this.ds.personal;

  performance: FormGroup = this.ds.performance;

  address: FormGroup = this.ds.address;

  addressarray = this.address.get('add') as FormArray;

  openDialog(primary: any, index: any) {
    this.dialog.open(DialogComponent, { data: primary, height: '600px', width: '600px' });
    this.update1(primary, index);
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

  update1(primary: any, index: any) {
    this.data.patchValue({
      id: primary.id,
      first: primary.first,
      last: primary.last,
      email: primary.email,
      gender: primary.gender,
      phone: primary.phone,
    });

    this.performance.patchValue({
      percentage: primary.percentage
    });

    this.addressarray.patchValue(
      [{
        street: primary.street,
        city: primary.city,
        pincode: primary.pincode,
        state: primary.state,
        country: primary.country
      }]
    );
  }



  delete(index: any) {
    this.ds.delete(index).subscribe(
      data => {
        console.log(data);
        this.datlist();
      }
    )
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
