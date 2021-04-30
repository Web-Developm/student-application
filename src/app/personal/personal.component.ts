import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private ds: DataService) { }

  @Output() personal: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup = this.ds.personal;

  display(event: any) {
    this.personal.emit(this.form);
  }

  getfirst() {
    if (this.form.controls['first'].hasError('required')) {
      return "First name required";
    }

    return this.form.controls['first'].hasError('pattern') ? "Not a valid firstname" : " ";
  }

  getlast() {
    if (this.form.controls['last'].hasError('required')) {
      return "Last name required";
    }

    return this.form.controls['last'].hasError('pattern') ? "Not a valid lastname" : " ";
  }

  getemail() {
    if (this.form.controls['email'].hasError('required')) {
      return "Email required";
    }

    return this.form.controls['email'].hasError('email') ? "Not a valid email" : " ";
  }

  getgender() {
    if (this.form.controls['gender'].hasError('required')) {
      return "Gender required";
    }

    return this.form.controls['gender'].hasError('pattern') ? "Not a valid name" : " ";
  }

  getphone() {
    if (this.form.controls['phone'].hasError('required')) {
      return "Phone number required";
    }

    return this.form.controls['phone'].hasError('pattern') ? "Not a valid phone number" : " ";
  }

  ngOnInit(): void {
  }

}
