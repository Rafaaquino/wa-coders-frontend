import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasscomponent } from './forgotPass/forgotPass.component';
import { codeAuthPassword } from './codeAuthPassword/codeAuthPassword.component';
import { LoginComponent } from './login/login.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

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
    ScrollToModule.forRoot(),
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [MessageService],
})
export class PagesModule {}
