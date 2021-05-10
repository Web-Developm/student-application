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

  public store!: any;

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

    const user1 = this.data.controls['username'].value;

    const pass = this.data.controls['password'].value;


    this.store.forEach((element: any, index: any, array: any) => {
      if (element.username === user1 && element.password === pass) {

        this.route.navigateByUrl('/data');
        alert("Login successfull");
        this.data.reset();
      }

      this.data.reset();




    }

    )





  }

  ngOnInit(): void {
    this.information();
  }

}
