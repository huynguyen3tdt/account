import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {generateCaptcha} from "../helper/generate-captcha";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  fgLogin:FormGroup = new FormGroup({});

  inputEmail: string;
  inputPassword: string;
  valueCaptcha: string;
  toggle = false;

  constructor(private route: Router,
              private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.valueCaptcha = generateCaptcha();
    // this.fgLogin = this.fb.group({
    //   inputEmail:
    // })
    this.inputEmail = localStorage.getItem('inputEmail');
    this.inputPassword = localStorage.getItem('inputPassword');
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  reCaptcha() {
    this.toggle = true;
    setTimeout(()=>{
      this.toggle = false;
      this.valueCaptcha = generateCaptcha();
    },500)
  }

  onSignin() {
    this.reCaptcha();

    this.route.navigate(['/home']);
  }

}
