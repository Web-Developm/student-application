import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private ds:DataService) { }

  public data:FormGroup=this.ds.data;
  public store:any;
  hide=true;

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
    this.ds.get().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }
    )
  }



  check() {
    let username = this.data.controls['username'].value;
    let password = this.data.controls['password'].value;

    for (let i = 0; i < 2; i++) {
      if (username == this.store[i].username && password == this.store[i].password) {
        alert("Login successfull");
        this.data.reset();
        break;
      }

      else if (username != this.store[i].username && password == this.store[i].password) {
        alert("Invalid username");
        this.data.reset();
        break;
      }

      else if (username == this.store[i].username && password != this.store[i].password) {
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
