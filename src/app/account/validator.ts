import {AbstractControl} from "@angular/forms";

export function checkEmail(controls: AbstractControl) {
  const valueEmail = controls.value.inputEmail;
  if (!valueEmail) {
    return {
      emailNotEnoughLength: true,
      messageEmail: 'Enter email'
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

export function checkPassword(controls: AbstractControl) {
  const PASSWORD_MIN_LENGTH = 8;
  const valuePassword = controls.value.inputPassword;

  if (!valuePassword) {
    return {
      passNotEnoughLength: true,
      invalid: true,
      message: 'Enter password'
    }
  }

  if (valuePassword.length < PASSWORD_MIN_LENGTH) {
    return {
      passLengthError: true,
      invalid: true,
      message: 'Password must be more than 8 characters'
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
    message: 'The password must contain at least two of the following characters: uppercase, lowercase, numbers, or symbols.'
  } : null;
}
