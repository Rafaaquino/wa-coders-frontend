import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subjUser$ = new BehaviorSubject<string | null>(null);
  private subjLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    return this.subjLoggedIn$.asObservable();
  }

  loggedin(t: boolean) {
    this.subjLoggedIn$.next(t);
  }

  getUser(): Observable<string | null> {
    return this.subjUser$.asObservable();
  }

  setUser(u: string) {
    this.subjUser$.next(u);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.subjLoggedIn$.next(false);
    this.router.navigateByUrl('/login');
  }
}
