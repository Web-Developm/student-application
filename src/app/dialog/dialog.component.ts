import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { Structure1 } from '../structure1';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    private ds: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  personal: FormGroup = this.ds.personal;

  performance: FormGroup = this.ds.performance;

  address: FormGroup = this.ds.address;

  addressarray: FormArray = this.address.get('add') as FormArray;

  list!: Structure1[];


  display() {
    this.ds.personaldata().subscribe(
      data => {
        this.list = data;
        console.log(data);
      }
    )
  }

  add() {
    this.ds.add1();
  }

  remove(index: any) {
    this.ds.remove(index);
  }

  getid() {
    if (this.personal.controls['id'].hasError('required')) {
      return "Id required";
    }

    return this.personal.controls['id'].hasError('pattern') ? "Not a valid id" : " ";
  }

  getfirst() {
    if (this.personal.controls['first'].hasError('required')) {
      return "First Name required";
    }

    return this.personal.controls['first'].hasError('pattern') ? "Not a valid first name" : " ";
  }

  getlast() {
    if (this.personal.controls['last'].hasError('required')) {
      return "Last Name required";
    }

    return this.personal.controls['last'].hasError('pattern') ? "Not a valid last name" : " ";
  }

  getemail() {
    if (this.personal.controls['email'].hasError('required')) {
      return "Email required";
    }

    return this.personal.controls['email'].hasError('pattern') ? "Not a valid email" : " ";
  }

  getgender() {
    if (this.personal.controls['gender'].hasError('required')) {
      return "gender required";
    }

    return 0;
  }

  getphone() {
    if (this.personal.controls['phone'].hasError('required')) {
      return "phone number required";
    }

    return this.personal.controls['phone'].hasError('pattern') ? " Not a valid phone number" : " ";
  }

  getpercentage() {
    if (this.performance.controls['percentage'].hasError('required')) {

      return "Percentage required";
    }

    return this.performance.controls['percentage'].hasError('pattern') ? "Not a valid percentage" : " ";
  }

  update2() {



    let primary = new Structure1();

    primary.id = this.personal.controls['id'].value;
    primary.first = this.personal.controls['first'].value;
    primary.last = this.personal.controls['last'].value;
    primary.email = this.personal.controls['email'].value;
    primary.gender = this.personal.controls['gender'].value;
    primary.phone = this.personal.controls['phone'].value;
    primary.percentage = this.performance.controls['percentage'].value;
    primary.address = this.addressarray.value;

    let id = Number(primary.id);

    this.ds.edit(primary, id).subscribe(
      data => {
        alert("Successfully updated");
      }
    )

  }




  ngOnInit(): void {
    this.display();

    console.log('datanshoumn', this.data);

    this.personal.patchValue({
      id: this.data.id,
      first: this.data.first,
      last: this.data.last,
      email: this.data.email,
      gender: this.data.gender,
      phone: this.data.phone
    });

    this.performance.patchValue({
      percentage: this.data.percentage
    });

    this.addressarray.controls.forEach((element: any, index: any, array: any) => {

      this.data.address.forEach((val: any, i: number) => {
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





  }

}
