import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Structure1 } from './structure1';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {


  url = "http://localhost:5555/personaldata/";


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
    id: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    first: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    last: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  genderdetails = [
    {
      value: 'Male', viewValue: 'Male'
    },

    {
      value: 'Female', viewValue: 'Female'
    }
  ]

  performance = this.fb.group({
    percentage: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
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
    });
  }


  add1() {
    this.add().push(this.fields());
  }

  remove(index: any) {
    this.add().removeAt(index);
  }

  login(): Observable<any> {
    return this.http.get("http://localhost:3000/login");
  }

  //Personal data
  personaldata(): Observable<any> {
    return this.http.get("http://localhost:5555/personaldata");
  }

  addpersonaldata(temp: Structure1): Observable<any> {
    return this.http.post("http://localhost:5555/personaldata", temp);
  }

  edit(primary: Structure1, id: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, primary);
  }

  delete(id: any): Observable<any> {
    //const url='http://localhost:5555/personaldata/' +id;

    return this.http.delete(`${this.url}/${id}`);
  }

  ngOnInit() {
    this.data;
    this.personal;
    this.performance;
    console.log(this.address);
  }




}
