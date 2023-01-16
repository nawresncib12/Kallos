import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import ApiResponse from '../data/ApiResponse';

type LoginResponse = {
  access_token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

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
    return this.http
      .post<ApiResponse<LoginResponse>>(`${this.API_URL}/auth/login`, {
        username: email,
        password,
      })
      .pipe(
        tap(
          (res) => {
            console.log('Login successful!');
            localStorage.setItem('token', res.data.access_token);
          },
          (err) => console.log(err)
        )
      );
  }
}
