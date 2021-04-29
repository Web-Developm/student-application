import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  address!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.address = this.fb.group({
      add: this.fb.array([this.fields()])
    });
  }

  data = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    password: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });



  personal = this.fb.group({
    first: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    last: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required,Validators.email]],
    gender: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  performance = this.fb.group({
    percentage: ['', [Validators.required]]
  });


  add(): FormArray {
    return this.address.get('add') as FormArray;
  }

  fields(): FormGroup {
    return this.fb.group({
      street: [''],
      city: [''],
      pincode: [''],
      state: [''],
      country: ['']
    })
  }

  add1() {
    this.add().push(this.fields());
  }

  remove(index: any) {
    this.add().removeAt(index);
  }







  get(): Observable<any> {
    return this.http.get('http://localhost:5555/data');
  }



}
