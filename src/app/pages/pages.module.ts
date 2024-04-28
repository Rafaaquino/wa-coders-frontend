import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasscomponent } from './forgotPass/forgotPass.component';
import { codeAuthPassword } from './codeAuthPassword/codeAuthPassword.component';

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ForgotPasscomponent,
    codeAuthPassword,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
