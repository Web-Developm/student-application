import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Structure1 } from '../structure1';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { NavigationExtras } from "@angular/router";
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {

  expandedElement!: Structure1 | null;

  constructor(public ds: DataService, private route: ActivatedRoute, private router: Router) { }

  public list = new MatTableDataSource<Structure1>();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  personal1:string[] = ["id", "first", "last", "email", "gender", "phone", "percentage","address","information"];

  openState = false;

  addresstype=['Temporary Address','Perment Address'];


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

  onSelect(element: any) {
    this.router.navigate(['/result', JSON.stringify(element)]);
  }

  filter(event: Event) {
    const filterValue: any = (event.target as HTMLInputElement).value;
    this.list.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit(): void {

    this.list.paginator = this.paginator;
    this.list.sort = this.sort;
    this.ds.personaldata().subscribe(
      data => {
        this.list.data = data;
        console.log(data);
      }
    )
  }

}
