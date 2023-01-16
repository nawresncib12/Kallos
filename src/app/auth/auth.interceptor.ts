import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.authService.getAuthToken();

    // Clone the request and set the new header in one step.
    const authReq = req.clone({
      setHeaders: { Authorization: authToken ? `Bearer ${authToken}` : '' },
    });

    // Pass the cloned request with the header to the next handler.
    return next.handle(authReq);
  }
}
