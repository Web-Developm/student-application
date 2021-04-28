import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'student';
  hide = true;

  constructor(private ds: DataService) {

  }

  public data: FormGroup = this.ds.data;

  getusername() {
    if (this.data.controls['username'].hasError('required')) {
      return "Username required";
    }

    return this.data.controls['username'].hasError('pattern') ? "Not valid username" : " ";
  }

  getpassword() {
    {
      if (this.data.controls['password'].hasError('required')) {
        return "Password required";
      }

      return this.data.controls['password'].hasError('pattern') ? "Not valid password" : " ";
    }
  }

  store = [
    {
      username: "admin",
      password: "123"
    }
  ];

  check() {
    let username = this.data.controls['username'].value;
    let password = this.data.controls['password'].value;

    for (let i = 0; i < 2; i++) {
      if (username === this.store[i].username && password === this.store[i].password) {
        alert("Login successfull");
        this.data.reset();
        break;
      }

      else if (username !== this.store[i].username && password === this.store[i].password) {
        alert("Invalid username");
        this.data.reset();
        break;
      }

      else if (username === this.store[i].username && password !== this.store[i].password) {
        alert("Invalid password");
        this.data.reset();
        break;
      }

      else {
        alert("Invalid Login details");
      }

    }


  }



}
