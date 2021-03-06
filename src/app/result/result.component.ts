import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Structure1 } from '../structure1';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private ds: DataService, public dialog: MatDialog) { }

  store!: Structure1[];

  openDialog() {
    this.dialog.open(DialogComponent, { height: '800px', width: '1000px' }).afterClosed().subscribe(
      store => console.log(store)
    );
    {

    }
  }

  public resultinfo:any;

  personal: FormGroup = this.ds.personal;
  performance: FormGroup = this.ds.performance;
  address: FormGroup = this.ds.address;

  addressarray: FormArray = this.ds.address.get('add') as FormArray;



  sample = ['id', 'first', 'last', 'email', 'gender', 'phone', 'percentage', 'address'];

  display() {
    this.ds.personaldata().subscribe(
      data => {
        this.store = data;
        console.log(data);
      }
    )
  }



  ngOnInit(): void {
    let id = this.route.params.subscribe((params: any) => {
      this.resultinfo = JSON.parse(params['id']);
    });

    console.log(this.resultinfo);
  }

}
