import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Structure1 } from '../structure1';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(public ds: DataService) { }

  public list!: Structure1[];

  personal1 = ["id", "first", "last", "email", "gender", "phone", "percentage", "street", "city", "pincode", "state", "country", "information"];

  datlist() {
    this.ds.personaldata().subscribe(
      data => {
        this.list = data;
        console.log(data);
      }
    )
  }

  display() {
    console.log(this.ds.personal);
    console.log(this.ds.performance);
    console.log(this.ds.performance);
  }

  ngOnInit(): void {
    this.datlist();
  }

}
