import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {

  static isValidEmail(control: AbstractControl): Promise<ValidationErrors | null> {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    console.log(control.value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!EMAIL_REGEXP.test(control.value) && control.value !== '' )
          resolve({isValidEmail: true});
        else
          resolve(null);
      }, 1000);
    });
  }

}
