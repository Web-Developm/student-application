export class Structure1 {
  id: any;
  first: any;
  last: any;
  email: any;
  gender: any;
  phone: any;
  percentage: any;
  address!: [{
    street: string;
    city: String;
    pincode: String;
    state: String;
    country: String;
  }];
}

