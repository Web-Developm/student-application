import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private ds: DataService) { }

  personal: FormGroup = this.ds.personal;

  performance: FormGroup = this.ds.performance;

  address: FormGroup = this.ds.address;

  arraycontrol = this.address.get('add') as FormArray;

  add()
  {
    this.ds.add1();
  }

  getfirst()
  {
    if(this.personal.controls['first'].hasError('required'))
    {
      return "First Name required";
    }

    return this.personal.controls['first'].hasError('pattern')? "Not a valid first name" : " ";
  }

  getlast()
  {
    if(this.personal.controls['last'].hasError('required'))
    {
      return "Last Name required";
    }

    return this.personal.controls['last'].hasError('pattern')? "Not a valid last name": " ";
  }

  getemail()
  {
    if(this.personal.controls['email'].hasError('required'))
    {
      return "Email required";
    }

    return this.personal.controls['email'].hasError('pattern')? "Not a valid email": " ";
  }

  getgender()
  {
    if(this.personal.controls['gender'].hasError('required'))
    {
      return "gender required";
    }

    return 0;
  }

  getphone()
  {
    if(this.personal.controls['phone'].hasError('required'))
    {
      return "phone number required";
    }

    return this.personal.controls['phone'].hasError('pattern')? " Not a valid phone number": " ";
  }

  getpercentage()
  {
    if(this.performance.controls['percentage'].hasError('required'))
    {

      return "Percentage required";
    }

    return this.performance.controls['percentage'].hasError('pattern')? "Not a valid percentage": " ";
  }



  ngOnInit(): void {
  }

}
