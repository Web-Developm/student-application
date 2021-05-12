import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../app/data.service';
import { Structure1 } from './structure1';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router, private ds: DataService) {


  }

  Login: FormGroup = this.ds.data;

  store!: Structure1[]


  loginuser() {
    this.ds.login().subscribe(
      data => {
        this.store = data;
      }
    )
  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.ds.isLogged()) {
      return true;
    }
    else {
      alert("You don't have permisssion to view this page");
      this.route.navigate(['/login']);
      return false;
    }

  }





}
