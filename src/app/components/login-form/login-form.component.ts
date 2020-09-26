import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  public user: User = new User();

  public loginForm: FormGroup;
  public name: FormControl;
  public password: FormControl;
  public surname: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.password = new FormControl('', [Validators.required]);
    this.surname = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);

    this.loginForm = this.formBuilder.group({
      name: this.name,
      password: this.password,
      surname: this.surname,
    });

    //this.loginForm.valueChanges.subscribe(console.log);
  }

  public login() {
    this.user.name = this.name.value;
    this.user.surname = this.surname.value;
    this.user.password = this.password.value;
    console.log(this.user);
    console.log(this.name.errors);
  }
}
