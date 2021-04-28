import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor(private ds: DataService) { }

  public form: FormGroup = this.ds.personal;
  value1: any;

  public form1: FormGroup = this.ds.performance;
  value2: any;

  public submit1(_event: any) {
    this.value1 = _event;
    this.form.value.sample = this.value1;
    console.log(this.form.value);
  }

  public submit2(_event: any) {
    this.value2 = _event;
    this.form1.value.sample = this.value2;
    console.log(this.form1);

  }

  display() {
    console.log(this.form.value);
    console.log(this.form1.value);

  }




  ngOnInit(): void {
  }

}
