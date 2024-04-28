import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../services/auth/authGuardService';
import { ForgotPasscomponent } from './forgotPass/forgotPass.component';
import { codeAuthPassword } from './codeAuthPassword/codeAuthPassword.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'password-forget',
    component: ForgotPasscomponent,
  },
  {
    path: 'code-auth-password',
    component: codeAuthPassword,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    component: IndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
