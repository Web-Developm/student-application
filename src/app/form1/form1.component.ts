import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PersonalComponent } from '../personal/personal.component';
import { PerformanceComponent } from '../performance/performance.component';
import { AddressComponent } from '../address/address.component';
import { Structure1 } from '../structure1';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  providers: [DataService, Structure1]
})
export class Form1Component implements OnInit {

  store!: Structure1[];



  constructor(private ds: DataService, private resolver: ComponentFactoryResolver) { }


  public form: FormGroup = this.ds.personal;
  value1: any;

  public form1: FormGroup = this.ds.performance;
  value2: any;

  public form2: FormGroup = this.ds.address;

  public arrayControl = this.form2.get('add') as FormArray;

  value3: any;


  /*public submit1(_event: any) {
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
  }*/



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





  addpersonaldata() {
    let index: any;

    let temp = new Structure1();
    temp.id = this.form.controls['id'].value;
    temp.first = this.form.controls['first'].value;
    temp.last = this.form.controls['last'].value;
    temp.email = this.form.controls['email'].value;
    temp.gender = this.form.controls['gender'].value;
    temp.phone = this.form.controls['phone'].value;
    temp.percentage = this.form1.controls['percentage'].value;
    temp.street = this.arrayControl.at(0).get('street')?.value;
    temp.city = this.arrayControl.at(0).get('city')?.value;
    temp.pincode = this.arrayControl.at(0).get('pincode')?.value;
    temp.state = this.arrayControl.at(0).get('state')?.value;
    temp.country = this.arrayControl.at(0).get('country')?.value;


    this.ds.addpersonaldata(temp).subscribe(
      data => {
        console.log(data);
        alert("Successfully added");
      }
    )

  }










  ngOnInit(): void {
  }

}
