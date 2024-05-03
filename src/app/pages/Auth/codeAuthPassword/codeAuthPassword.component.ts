import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-codeAuthPassword',
  templateUrl: './codeAuthPassword.component.html',
  styleUrls: ['./codeAuthPassword.component.css'],
})
/**
 * Recoverpwd component
 */
export class codeAuthPassword implements OnInit {
  recoveryPassForm: FormGroup;

  constructor(
    private router: Router,
    private _forgotPassService: ForgotPasswordService,
    private fb: FormBuilder,
    private _messageService: MessageService
  ) {
    this.recoveryPassForm = this.fb.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.recoveryPassForm.valid) {
      const email = localStorage.getItem('email');
      const code = this.recoveryPassForm.get('code').value;
      this._forgotPassService.codeAuthPass(code, email).subscribe({
        next: this.onSubmitSuccess.bind(this),
        error: this.onSubmitError.bind(this),
      });
    }
  }

  onSubmitSuccess(response) {
    console.log(response);
    localStorage.setItem('token', response.token);
    localStorage.setItem('userId', response.userId);
    this.router.navigateByUrl('/reset-password');
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
