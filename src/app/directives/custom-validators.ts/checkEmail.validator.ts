import { AbstractControl, ValidationErrors } from '@angular/forms';

export class emailCheck {
  public static isCompanyEmail(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const email: string = control.value;
    const domain: string = email.substring(
      email.indexOf('@') + 1,
      email.indexOf('.com')
    );
    const invalidDomains: Array<string> = ['gmail', 'yahoo', 'gmx', 'aol'];
    const invalid: boolean = invalidDomains.indexOf(domain) > -1;
    return invalid ? { invalidEmail: { value: email } } : null;
  }
}
