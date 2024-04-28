import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/models/login-response.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
/**
 * Login component
 */
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _loginService: LoginService,
    private _authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.loginForm.valid) {
      this._loginService.login(this.loginForm.value).subscribe({
        next: this.onSubmitSuccess.bind(this),
        error: this.onSubmitError.bind(this),
      });
    }
  }

  onSubmitSuccess(response: ILoginResponse) {
    console.log(response);
    localStorage.setItem('token', response.token);
    localStorage.setItem('userId', response.userId);
    this._authService.loggedin(true);
    this._authService.setUser(response.userId);
    this.router.navigateByUrl('dashboard');
  }

  onSubmitError(error: any) {
    console.log(error.error.message);
  }
}
