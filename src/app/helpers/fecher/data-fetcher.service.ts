import {Injectable} from '@angular/core';
import {catchError, finalize, Observable, Subject, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  private loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();
  private errorSubject = new Subject<Error>();
  errors$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.request(url, 'GET')
  }

  post(url: string, body: any): Observable<any> {
    return this.request(url, 'POST', body)
  }

  put(url: string, body: any): Observable<any> {
    return this.request(url, 'PUT', body)
  }

  delete(url: string): Observable<any> {
    return this.request(url, 'DELETE')
  }

  request(url: string, method: string, body?: any) {
    this.loadingSubject.next(true);
    return this.http.request(method, url, {body}).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    this.errorSubject.next(error);
    // return an observable with a user-facing error message
    return throwError(
      () => 'Something bad happened; please try again later.');
  }
}
