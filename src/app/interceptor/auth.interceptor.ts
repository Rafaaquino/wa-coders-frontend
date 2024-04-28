import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `bearer ${token}`,
        },
      });
      return next.handle(authReq).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
            }
          }
          return throwError(error);
        })
      );
    }
    return next.handle(req);
  }
}
