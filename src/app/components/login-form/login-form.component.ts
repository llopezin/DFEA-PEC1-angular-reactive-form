import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { checkWord } from 'src/app/directives/custom-validators.ts/checkWord.validator copy';
import { matchingFields } from 'src/app/directives/custom-validators.ts/matchingFields.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  public user: User = new User();

  public loginForm: FormGroup;
  public name: FormControl;
  public surname: FormControl;
  public email: FormControl;
  public password: FormControl;
  public date: FormControl;
  public telephone: FormControl;
  public age: FormControl;
  public description: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      checkWord.checkInvalidWord(/administrator/i),
    ]);

    console.log(this.name);

    this.surname = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.date = new FormControl('', [
      Validators.pattern(/([12]\d{3}-\d{2}-\d{2})/),
      Validators.maxLength(10),
    ]);
    this.telephone = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.required, Validators.min(18)]);
    this.description = new FormControl('', [Validators.maxLength(200)]);

    this.loginForm = this.formBuilder.group(
      {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        date: this.date,
        telephone: this.telephone,
        age: this.age,
        description: this.description,
      },
      { validators: matchingFields.match([this.name, this.surname]) }
    );

    //this.loginForm.valueChanges.subscribe(console.log);
  }

  public login() {
    this.user.name = this.name.value;
    this.user.surname = this.surname.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.date = this.date.value;
    this.user.telephone = this.telephone.value;
    this.user.age = this.age.value;
    this.user.description = this.description.value;
    this.user.description = this.description.value;
    console.log(this.user);
    console.log(this.name.errors);
    console.log(this.surname.errors);
  }
}
