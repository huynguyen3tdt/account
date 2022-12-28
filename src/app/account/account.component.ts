import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";

export function checkEmail(controls: AbstractControl) {
  const valueEmail = controls.value.inputEmail;
  if (!valueEmail) {
    return {
      emailNotEnoughLength: true,
      messageEmail: 'Nhập email'
    }
  }
  return null
}

export function matchPassword(controls: AbstractControl) {
  const value = controls.value;
  return (value.inputPassword === value.inputConfirm) ? null : {
    passwordnotmatch: true,
    invalid: true,
    message: 'Các mật khẩu đã nhập không khớp. Hãy thử lại.'
  }
}

export function checkPassword(controls: AbstractControl) {
  const PASSWORD_MIN_LENGTH = 8;
  const valuePassword = controls.value.inputPassword;

  if (!valuePassword) {
    return {
      passNotEnoughLength: true,
      invalid: true,
      message: 'Nhập mật khẩu'
    }
  }

  if (valuePassword.length < PASSWORD_MIN_LENGTH) {
    return {
      passLengthError: true,
      invalid: true,
      message: 'Mật khẩu phải nhiều hơn 8 ký tự'
    }
  }
  const REX_UPPER_CASE = /[A-Z]+/.test(valuePassword);

  const REX_LOWER_CASE = /[a-z]+/.test(valuePassword);

  const REX_NUMBER = /[0-9]+/.test(valuePassword);

  const REX_SPEACIAL_CHARACTER = /[!@#$%^&*()_+`,./;'{}]+/.test(valuePassword);

  const passwordValid = (REX_UPPER_CASE && REX_LOWER_CASE) ||
    (REX_UPPER_CASE && REX_NUMBER) ||
    (REX_UPPER_CASE && REX_SPEACIAL_CHARACTER) ||
    (REX_LOWER_CASE && REX_NUMBER) ||
    (REX_NUMBER && REX_SPEACIAL_CHARACTER) ||
    (REX_LOWER_CASE && REX_SPEACIAL_CHARACTER)

  return !passwordValid ? {
    passwordStrength: true,
    invalid: true,
    message: 'Mật khẩu phải chứa ít nhất hai trong số các ký tự sau: chữ hoa, chữ thường, số hoặc ký hiệu.'
  } : null;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  fgRegister: FormGroup = new FormGroup({});
  isSubmit = false;
  isConfirm = true;

  ngOnInit() {
    this.fgRegister = new FormGroup({ //inputSurName thuộc vào fgRegister
        inputSurname: new FormControl('', {validators: [Validators.required], updateOn: "change"}),
        inputName: new FormControl('', Validators.required),
        inputEmail: new FormControl('', {
          validators: [Validators.required, Validators.email],
          updateOn: "change"
        }),
        inputDate: new FormControl(''),
        inputMale: new FormControl(''),
        inputPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        inputConfirm: new FormControl('')
      },
      {
        validators: [matchPassword, checkEmail, checkPassword]
      })
  }

  onSubmit(rf: object) {
    this.isSubmit = true;
    this.fgRegister.markAllAsTouched();
    console.log(rf)
  }

  showPass() {
    this.contextPassword.type = this.contextPassword.type === 'text' ? 'password' : 'text';
  }

  contextSurname = {
    controlName: "inputSurname",
    displayName: "Họ",
    placeholder: "họ"
  };
  contextName = {
    controlName: "inputName",
    displayName: "Tên",
    placeholder: "tên"

  }
  contextEmail = {
    controlName: "inputEmail",
    displayName: "Email",
  }
  contextDate = {
    controlName: "inputDate",
    displayName: "Ngày sinh",
    type: "date"
  }
  contextMale = {
    id: "male",
    controlName: "inputMale",
    displayName: "Giới tính",
    type: "radio",
    valueMale: "Male"
  }
  contextFeMale = {
    id: "female",
    controlName: "inputMale",
    displayName: "Giới tính",
    type: "radio",
    valueMale: "Female"
  }

  contextPassword = {
    controlName: "inputPassword",
    displayName: "Mật Khẩu",
    type: "password"
  }
  contextConfirm = {
    controlName: "inputConfirm",
    displayName: "Xác Nhận",
    type: "password"

  }
}
