import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {BehaviorSubject, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import User from '../model/User';

type LoginResponseData = {
  access_token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();
  constructor(
    private readonly fetcherService: FetcherService,
    private readonly jwtHelper: JwtHelperService
  ) { }

  API_URL = environment.API_URL;

  getAuthToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
  }

  changeLoginState(state: boolean) {
    this.loggedInSubject.next(state);
  }

  login(email: string, password: string) {
    return this.fetcherService
      .post<LoginResponseData>(`auth/login`, {
        username: email,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.data.access_token);
        })
      );
  }

  register(formValue: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    password: string;
  }) {
    return this.fetcherService.post<User>(`auth/register`, formValue);
  }
}
