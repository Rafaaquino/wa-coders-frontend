import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';

@Component({
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css'],
})
/**
 * ResetPasswordComponent
 */
export class ResetPasswordComponent implements OnInit {
  recoveryPassForm: FormGroup;

  constructor(
    private router: Router,
    private _forgotPassService: ForgotPasswordService,
    private _messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.recoveryPassForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      mathPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.recoveryPassForm.invalid) {
      return alert('Invalid Form');
    }

    if (this.recoveryPassForm.valid) {
      const email = localStorage.getItem('email');
      this._forgotPassService
        .resetPassword(this.recoveryPassForm.value, email)
        .subscribe({
          next: this.onSubmitSuccess.bind(this),
          error: this.onSubmitError.bind(this),
        });
    }
  }

  onSubmitSuccess(res) {
    console.log(res);
    localStorage.removeItem('email');
    this.router.navigateByUrl('/dashboard');
  }

  onSubmitError(error) {
    console.log(error);
    this.show(error.error.message);
  }

  show(error: string) {
    this._messageService.add({
      severity: 'error',
      summary: '',
      detail: error,
    });
  }
}
