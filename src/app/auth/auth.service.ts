import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../data/profile.service';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import User from '../model/User';

type LoginResponseData = {
  access_token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly fetcherService: FetcherService) {}

  API_URL = environment.API_URL;

  isLoggedIn() {
    return !!localStorage.getItem('token');
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
