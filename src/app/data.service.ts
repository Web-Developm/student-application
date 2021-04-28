import { Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fb: FormBuilder) { }

  data = this.fb.group({
    username: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });






  getpassword()
  {
    if(this.data.controls['password'].hasError('required'))

    {
      return "Password required";
    }

    return this.data.controls['password'].hasError('pattern')? "Not valid password":" ";
  }
}
