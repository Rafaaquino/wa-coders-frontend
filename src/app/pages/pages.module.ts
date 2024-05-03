import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ResetPasswordComponent } from './Auth/resetPassword/resetPassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasscomponent } from './Auth/forgotPass/forgotPass.component';
import { codeAuthPassword } from './Auth/codeAuthPassword/codeAuthPassword.component';
import { LoginComponent } from './Auth/login/login.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
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
    DropdownModule,
  ],
  providers: [MessageService],
})
export class PagesModule {}
