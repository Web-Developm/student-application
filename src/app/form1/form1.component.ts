import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalComponent } from '../personal/personal.component';
import { PerformanceComponent } from '../performance/performance.component';
import { AddressComponent } from '../address/address.component';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor(private ds: DataService, private resolver: ComponentFactoryResolver) { }

  public form: FormGroup = this.ds.personal;
  value1: any;

  public form1: FormGroup = this.ds.performance;
  value2: any;

  public form2: FormGroup = this.ds.address;
  value3: any;

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

  public submit3(_event: any) {
    this.value3 = _event;
    this.form2.value.sample = this.value3;
    console.log(this.form2);
  }

  display() {
    console.log(this.form.value);
    console.log(this.form1.value);
    console.log(this.form2.value);

  }

  @ViewChild('personal', { static: false, read: ViewContainerRef }) target!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  addPersonal() {
    let childComponent = this.resolver.resolveComponentFactory(PersonalComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

  @ViewChild('performance', { static: false, read: ViewContainerRef }) target1!: ViewContainerRef;
  private componentRef1!: ComponentRef<any>;

  addPerformance() {
    let childComponent = this.resolver.resolveComponentFactory(PerformanceComponent);
    this.componentRef1 = this.target1.createComponent(childComponent);
  }

  @ViewChild('address', { static: false, read: ViewContainerRef }) target2!: ViewContainerRef;
  private componentRef2!: ComponentRef<any>;

  addaddress() {
    let childComponent = this.resolver.resolveComponentFactory(AddressComponent);
    this.componentRef2 = this.target2.createComponent(childComponent);
  }









  ngOnInit(): void {
  }

}
