import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { UserLogin } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  loginForm = this.formBuilder.group({
    username: ['facundo', [Validators.required]],
    password: ['1234', [Validators.required]],
  });
  userLogged: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLogged.subscribe({
      next: (userLogged) => (this.userLogged = userLogged),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    event?.preventDefault();
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as UserLogin).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
          this.loginError = error;
        },
        complete: () => {
          console.log('complete');
          this.router.navigateByUrl('/');
          this.loginForm.reset();
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
