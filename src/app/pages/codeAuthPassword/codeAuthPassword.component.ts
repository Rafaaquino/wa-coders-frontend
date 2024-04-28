import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { Router } from '@angular/router';

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
    private fb: FormBuilder
  ) {
    this.recoveryPassForm = fb.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.recoveryPassForm.valid) {
      this._forgotPassService
        .codeAuthPass(this.recoveryPassForm.value)
        .subscribe({
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
  }
}
