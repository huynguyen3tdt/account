import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  inputEmail: string;
  inputPassword: string;

  constructor(private route: Router) {
  }

  ngOnInit():void {
    this.inputEmail = localStorage.getItem('inputEmail');
    this.inputPassword = localStorage.getItem('inputPassword');
  }

  onSignin(){
    this.route.navigate(['/home']);
  }
}
