import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckUserIsAuthenticated {
  constructor(private _authService: AuthService) {}

  checkUserIsAuthenticated() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      this._authService.loggedin(true);
    }
  }
}
