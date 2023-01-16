import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import ApiResponse from "../../data/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class FetcherService {
  apiPath = "http://localhost:3000"

  constructor(private http: HttpClient) {
  }

  get<T>(url: string): Observable<ApiResponse<T>> {
    return this.request<T>(url, 'GET')
  }

  post<T>(url: string, body: any): Observable<ApiResponse<T>>{
    return this.request<T>(url, 'POST', body)
  }

  put<T>(url: string, body: any): Observable<ApiResponse<T>> {
    return this.request<T>(url, 'PUT', body)
  }

  delete<T>(url: string): Observable<ApiResponse<T>>{
    return this.request<T>(url, 'DELETE')
  }

  private request<T>(url: string, method: string, body?: any): Observable<ApiResponse<T>> {
    return this.http.request<ApiResponse<T>>(method, `${this.apiPath}/${url}`, {body})
  }
}
