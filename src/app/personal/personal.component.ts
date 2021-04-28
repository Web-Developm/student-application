import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private ds:DataService) { }

  @Output() personal: EventEmitter<any> = new EventEmitter<any>();

  public form:FormGroup=this.ds.personal;

  display(event:any) {
    this.personal.emit(this.form);
  }

  ngOnInit(): void {
  }

}
