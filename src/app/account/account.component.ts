import {Component, OnInit} from '@angular/core';
import { checkName, checkPassword, checkEmail, matchPassword} from "./validator";
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  fgRegister: FormGroup = new FormGroup({});
  isSubmit = false;
  isConfirm = true;
  lang;

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.fgRegister = new FormGroup({ //inputSurName thuộc vào fgRegister
        inputSurname: new FormControl('', {validators: [Validators.required], updateOn: "change"}),
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
        validators: [matchPassword, checkEmail, checkPassword,checkName]
      })
  }

  onSubmit(rf: object) {
    this.isSubmit = true;
    this.fgRegister.markAllAsTouched();
    console.log(this.fgRegister.value);
  }

  showPass() {
    this.contextPassword.type = this.contextPassword.type === 'text' ? 'password' : 'text';
  }

  changLang(event: any) {
    this.translate.use(event.target.value)
    console.log(event.target.value);
    localStorage.setItem("lang", event.target.value);
  }

  contextSurname = {
    controlName: "inputSurname",
    displayName: "Last Name",
    placeholder: "họ"
  };
  contextName = {
    controlName: "inputName",
    displayName: "First Name",
    placeholder: "tên"

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
  contextMale = {
    id: "male",
    controlName: "inputGender",
    displayName: "Gender",
    type: "radio",
    value: 'Male'
  }
  contextFeMale = {
    id: "female",
    controlName: "inputGender",
    displayName: "Gender",
    type: "radio",
    value: 'Female'
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
