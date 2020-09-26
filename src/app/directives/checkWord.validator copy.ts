import { invalid } from '@angular/compiler/src/render3/view/util';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class checkWord {
  public static checkInvalidWord(
    control: AbstractControl,
    mask: RegExp
  ): { [key: string]: any } | null {
    const invalid = mask.test(control.value);
    return invalid ? { 'invalid word': { word: control.value } } : null;
  }
}
