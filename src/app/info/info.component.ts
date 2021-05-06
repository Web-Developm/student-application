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

      let user1 = this.data.controls['username'].value;

      let pass = this.data.controls['password'].value;



      if (this.data.controls['username'].value == this.store[i].username &&  this.data.controls['password'].value == this.store[i].password) {
        alert("Login successfull");
        this.route.navigate(['/data']);
        this.data.reset();
        return
      }

    }

    alert("invalid login details");
    console.log("Invalid login details");




  }

  ngOnInit(): void {
    this.information();
  }

}
