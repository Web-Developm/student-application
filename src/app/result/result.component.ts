import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public resultinfo!: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  sample=['id','first','last','email','gender','phone','percentage','street','city','pincode','state','country'];

  ngOnInit(): void {
    let id = this.route.params.subscribe((params: any) => {
      this.resultinfo = JSON.parse(params['id']);
    });

    console.log(this.resultinfo);
  }

}
