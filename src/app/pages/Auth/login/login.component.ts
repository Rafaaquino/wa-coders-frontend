import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'primeng/api';
import { ILoginResponse } from 'src/app/models/login-response.interface';

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
    private _messageService: MessageService
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
    this.router.navigateByUrl('dashboard');
  }

  onSubmitError(error: any) {
    const erro = error.error.message;
    console.log(error.error.message);
    this.show(erro);
  }

  show(error: string) {
    this._messageService.add({
      severity: 'error',
      summary: '',
      detail: error,
    });
  }
}
