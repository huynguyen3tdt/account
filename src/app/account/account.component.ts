import {Component, OnInit} from '@angular/core';
import {checkName, validateEmail, matchPassword, validatePassword} from "./validator";
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {REX_DATE_FORMAT} from "../regex.constant";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  fgRegister: FormGroup = new FormGroup({});

  isSubmitted = false;

  constructor(
    private route: Router,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit() {
    this.fgRegister = new FormGroup({
        inputSurname: new FormControl('', {
          validators: [Validators.required],
          updateOn: "change"
        }),
        inputName: new FormControl('', Validators.required),
        inputEmail: new FormControl('', {
          validators: [Validators.required, Validators.email],
          updateOn: "change"
        }),
        inputDate: new FormControl('', {
          validators: [Validators.required],
          updateOn: "change"
        }),
        inputGender: new FormControl('male', {
          validators: [Validators.required],
          updateOn: "change"
        }),
        inputPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        inputConfirm: new FormControl('')
      },
      {
        validators: [matchPassword, validateEmail, validatePassword, checkName]
      })
  }

  onSubmit(rf: object) {
    this.isSubmitted = true;
    this.fgRegister.markAllAsTouched();
    this.fgRegister.updateValueAndValidity();
    if (this.fgRegister.valid) {
      localStorage.setItem("inputSurname", this.fgRegister.get('inputSurname').value);
      localStorage.setItem("inputName", this.fgRegister.get('inputName').value);
      localStorage.setItem("inputEmail", this.fgRegister.get('inputEmail').value);
      localStorage.setItem("inputDate", this.fgRegister.get('inputDate').value);
      localStorage.setItem("inputGender", this.fgRegister.get('inputGender').value);
      localStorage.setItem("inputPassword", this.fgRegister.get('inputPassword').value);
      this.route.navigate(['/info'])
    }
  }

  toggleShowPassword() {
    this.contextPassword.type = this.contextPassword.type === 'text' ? 'password' : 'text';
  }

  contextSurname = {
    controlName: "inputSurname",
    displayName: "Last Name",
  };


  contextName = {
    controlName: "inputName",
    displayName: "First Name",

  }


  contextEmail = {
    controlName: "inputEmail",
    displayName: "Email",
  }


  contextDate = {
    controlName: "inputDate",
    displayName: "Date",
    type: "date",
    maxValue: this.datePipe.transform(new Date(), REX_DATE_FORMAT)
  }


  contextPassword = {
    controlName: "inputPassword",
    displayName: "Password",
    type: "password"
  }


  contextConfirm = {
    controlName: "inputConfirm",
    displayName: "Confirm Password",
    type: "password"
  }
}
