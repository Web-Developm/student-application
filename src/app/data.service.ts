import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  data = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    password: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  personal = this.fb.group({
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
    email: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });

  performance = this.fb.group({
    percentage: ['', [Validators.required]]
  });



  get(): Observable<any> {
    return this.http.get('http://localhost:5555/data');
  }

}
