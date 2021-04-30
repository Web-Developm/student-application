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

  getpercentage()
  {
    if(this.per.controls['percentage'].hasError('required'))
    {
      return "Percentage required";
    }

    return this.per.controls['percentage'].hasError('pattern')? "Not a valid percentage":" ";
  }

  ngOnInit(): void {
  }

}
