import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isUserloggedin() {
    const token = this.getAuthorizationToken();

    if (!token) return false;

    if (this.isTokenExpired(token)) return false;

    return true;
  }

  getAuthorizationToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  getTokenExpiration(token: string): any {
    const decoded: any = jwtDecode(token);
    if (decoded.exp === undefined) {
      return null;
    }

    return decoded;
  }

  isTokenExpired(token: string): boolean {
    if (!token) return true;

    const decoded = this.getTokenExpiration(token);
    const currentTime = Date.now() / 1000;

    if (decoded === undefined) return false;

    return !(decoded.exp > currentTime);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
