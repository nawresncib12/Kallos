import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import ApiResponse from "../data/ApiResponse";

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event = event.clone({
          body: new ApiResponse(event.body)
        });
      }
      return event;
    }));
  }
}
