import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginResponse } from '../models/login-response.interface';
import { IResetPassword } from '../models/reset-password.interface';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private http: HttpClient) {}

  forgotPassword(email: string): Observable<string> {
    return this.http.post<string>(
      environment.host_api + `/users/forgot-password`,
      email
    );
  }

  codeAuthPass(code: string): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      environment.host_api + `/users/code-auth-recovery-password`,
      code
    );
  }

  resetPassword(newPass: IResetPassword): Observable<any> {
    return this.http.post<any>(
      environment.host_api + `/users/reset-password`,
      newPass
    );
  }
}
