import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';

@Component({
  selector: 'app-forgotPass',
  templateUrl: './forgotPass.component.html',
  styleUrls: ['./forgotPass.component.css'],
})
/**
 * ForgotPasscomponent
 */
export class ForgotPasscomponent implements OnInit {
  recoveryPassForm: FormGroup;

  constructor(
    private _forgotPassService: ForgotPasswordService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.recoveryPassForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.recoveryPassForm.valid) {
      this._forgotPassService
        .forgotPassword(this.recoveryPassForm.value)
        .subscribe({
          next: this.onSubmitSuccess.bind(this),
          error: this.onSubmitError.bind(this),
        });
    }
  }

  onSubmitSuccess(res) {
    console.log(res);
    this.router.navigateByUrl('/code-auth-password');
  }

  onSubmitError(error) {
    console.log(error);
  }
}
