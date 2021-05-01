import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {


  constructor(private ds: DataService) {

  }

  @Output() address: EventEmitter<any> = new EventEmitter<any>();

  group: FormGroup = this.ds.address;

  fields=this.group.get('add') as FormArray;


  display() {
    this.address.emit(this.group);
    this.address.emit(this.fields);
  }

  add() {
    this.ds.add1();
  }

  delete(index: any) {
    this.ds.remove(index);
  }

  print() {
    console.log(this.fields.value);
  }

  getstreet()
  {
    if(this.fields.at(0).get('street')?.hasError('required'))
    {
      return "Street required";
    }

    return 0;
  }






  ngOnInit() {

  }

}
