import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class matchingFields {
  public static match(fields: Array<AbstractControl>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const invalid = fields[0].value === fields[1].value;
      return invalid && fields[0].value
        ? { fieldMatch: { matches: [fields[0], fields[1]] } }
        : null;
    };
  }
}
