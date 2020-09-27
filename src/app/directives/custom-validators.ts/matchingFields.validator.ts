import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class matchingFields {
  public static match(fieldToCompare: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const invalid = control.value === fieldToCompare.value;
      return invalid ? { fieldMatch: { value: control.value } } : null;
    };
  }
}

function required(control: AbstractControl): ValidationErrors | null {
  return;
}
