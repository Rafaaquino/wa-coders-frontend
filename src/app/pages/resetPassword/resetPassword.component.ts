import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private fb: FormBuilder
  ) {
    this.recoveryPassForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
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
      this._forgotPassService
        .resetPassword(this.recoveryPassForm.value)
        .subscribe({
          next: this.onSubmitSuccess.bind(this),
          error: this.onSubmitError.bind(this),
        });
    }
  }

  onSubmitSuccess(res) {
    console.log(res);
    this.router.navigateByUrl('/dashboard');
  }

  onSubmitError(error) {
    console.log(error);
  }
}
