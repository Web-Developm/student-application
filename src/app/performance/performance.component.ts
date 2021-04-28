import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor(private ds: DataService) { }

  @Output() performance: EventEmitter<any> = new EventEmitter<any>();

  public per = this.ds.performance;

  display() {
    this.performance.emit(this.per);
  }

  ngOnInit(): void {
  }

}
