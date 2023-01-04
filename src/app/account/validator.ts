import {AbstractControl} from "@angular/forms";
import {
  PASSWORD_MIN_LENGTH,
  REX_SPEACIAL_CHARACTER,
  REX_UPPER_CASE,
  REX_LOWER_CASE,
  REX_NUMBER
} from "../regex.constant";

export function validateEmail(controls: AbstractControl) {
  const valueEmail = controls.value.inputEmail;
  const email = controls.get('inputEmail')
  if (!valueEmail) {
    return {
      invalidEmail: true,
      messageEmail: 'Enter email'
    }
  }

  if(email.errors){
    return {
      invalidEmail: true,
      messageEmail: 'Wrong email format'
    }
  }

  return null
}

export function checkName(controls: AbstractControl) {
  const value = controls.value;

  if (!value.inputSurname) {
    return {
      invalid: true,
      messageName: 'Enter first name'
    }
  }

  if (!value.inputName) {
    return {
      invalid: true,
      messageName: 'Enter last name'
    }
  }
  const nameValid = (!value.inputName) && (!value.inputSurname)
  return nameValid ? {invalid: true, messageName: 'Enter first name and last name'} : null
}

export function matchPassword(controls: AbstractControl) {
  const value = controls.value;
  return (value.inputPassword === value.inputConfirm) ? null : {
    passwordnotmatch: true,
    invalid: true,
    message: 'The entered passwords do not match. Try again.'
  }
}

export function validatePassword(form: AbstractControl) {

  const password = form.get('inputPassword');
  const passwordValue = password.value;

  if (!passwordValue) {
    password.setErrors({
        passNotEnoughLength: true,
        invalid: true,
      }
    )
    return {invalid: true, message: 'Enter password'};
  }

  if (!passwordValue) {
    password.setErrors({
        passNotEnoughLength: true,
        invalid: true
      }
    )
    return {
      invalid: true,
      message: 'Enter password'
    };
  }

  if (passwordValue.length < PASSWORD_MIN_LENGTH) {
    password.setErrors({
      passLengthError: true,
      invalid: true
    })
    return {
      invalid: true,
      message: 'Password must be more than 8 characters'
    };
  }
  const containUpperCase = REX_UPPER_CASE.test(passwordValue);

  const containLowerCase = REX_LOWER_CASE.test(passwordValue);

  const containNumber = REX_NUMBER.test(passwordValue);

  const ContainSpeacitalCharactor = REX_SPEACIAL_CHARACTER.test(passwordValue);

  const passwordValid = (containUpperCase && containLowerCase) ||
    (containUpperCase && containNumber) ||
    (containUpperCase && ContainSpeacitalCharactor) ||
    (containLowerCase && containNumber) ||
    (containNumber && ContainSpeacitalCharactor) ||
    (containLowerCase && ContainSpeacitalCharactor)

  if (!passwordValid) {
    password.setErrors(
      {
        passwordStrength: true,
        invalid: true
      })
    return {
      invalid: true,
      message: 'The password must contain at least two of the following characters: uppercase, lowercase, numbers, or symbols.'
    };
  }
  return null;
}
