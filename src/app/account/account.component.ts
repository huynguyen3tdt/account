import {Component, OnInit} from '@angular/core';
import {checkName, validateEmail, matchPassword, validatePassword} from "./validator";
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  fgRegister: FormGroup = new FormGroup({});

  isSubmitted = false;

  LANGUAGE;


  constructor(
    private translate: TranslateService,
    private route: Router
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
    if(this.fgRegister.valid){
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

  changeLang(event: Event) {
    const target = (event.target as HTMLInputElement);
    console.log(target.value)
    this.translate.use(target.value)
    localStorage.setItem("lang", target.value);
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
    type: "date"
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
