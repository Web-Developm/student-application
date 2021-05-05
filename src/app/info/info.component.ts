import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private ds: DataService, private route: Router) { }

  store: any;

  public data: FormGroup = this.ds.data;
  hide = true;

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

  information() {
    this.ds.login().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }
    )
  }


  check() {



    for (let i = 0; i <= this.store.length; i++) {

      let user1 = this.store[i].username;

      let pass = this.store[i].password;

      if (this.data.controls['username'].value == user1 && this.data.controls['password'].value == pass) {
        alert("Login successfull");
        this.route.navigate(['/data']);
        this.data.reset();
        break;
      }

      else if (this.data.controls['username'].value != user1 && this.data.controls['password'].value == pass) {
        alert("Invalid username");
        this.data.reset();
        break;
      }

      else if (this.data.controls['username'].value == user1 && this.data.controls['username'].value != pass) {
        alert("Invalid password");
        this.data.reset();
        break;
      }

      else {
        alert("Invalid Login details");
      }

    }

  }

  ngOnInit(): void {
    this.information();
  }

}
