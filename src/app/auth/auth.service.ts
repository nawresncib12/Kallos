import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import ApiResponse from '../data/ApiResponse';
import { FetcherService } from '../helpers/fetcher/fetcher.service';

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
      .post<LoginResponseData>(`/auth/login`, {
        username: email,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.data.access_token);
        })
      );
  }
}
