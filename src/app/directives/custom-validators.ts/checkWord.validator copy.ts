import { AbstractControl, ValidatorFn } from '@angular/forms';

export class checkWord {
  public static checkInvalidWord(mask: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const invalid = mask.test(control.value);
      return invalid ? { invalidWord: { word: control.value } } : null;
    };
  }
}
