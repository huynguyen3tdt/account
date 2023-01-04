import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ReCaptcha2Component} from "ngx-captcha";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{

  fgCaptcha: FormGroup = new FormGroup({});

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  constructor() {
  }

  ngOnInit():void {
    this.fgCaptcha = new FormGroup({
      recaptcha: new FormControl('',{
        validators: [Validators.required],
      })
    })
  }
  handleSuccess(data) {
    console.log(data);
  }
}
