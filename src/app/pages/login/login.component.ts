import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/models/login-response.interface';
import { IMessages } from 'src/app/models/messages.interface';
import { LoginService } from 'src/app/services/login.service';
import { Message, MessageService } from 'primeng/api';

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
  messages: IMessages;
  msgs: any[] = [];
  showMessage: boolean = false;

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

  hide() {
    this.showMessage = false;
    this.msgs = [];
  }
}
