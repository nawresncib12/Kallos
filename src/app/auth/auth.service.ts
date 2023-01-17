import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs';
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
  constructor(
    private readonly fetcherService: FetcherService,
    private readonly jwtHelper: JwtHelperService
  ) {}

  API_URL = environment.API_URL;

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
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
