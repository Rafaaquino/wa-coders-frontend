import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { CheckUserIsAuthenticated } from './checkUserIsAuthenticated.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private _authService: AuthService,
    private _checkUserService: CheckUserIsAuthenticated
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this._checkUserService.checkUserIsAuthenticated();
    return this._authService.isAuthenticated().pipe(
      tap((b) => {
        console.log('logou?', b);
        if (!b) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
