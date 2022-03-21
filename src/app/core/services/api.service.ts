import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpService {
  constructor(http: HttpClient) {
    super(http)
  }

  getAuth() {
    var token = localStorage.getItem('token');
    if (token === null) {
      return "";
    } else {
      return token;
    }
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return super.get(`${environment.apiUrl}${path}`, params, this.getAuth());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return super.put(`${environment.apiUrl}${path}`, body, this.getAuth());
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return super.patch(`${environment.apiUrl}${path}`, body, this.getAuth());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return super.post(`${environment.apiUrl}${path}`, body, this.getAuth());
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return super.delete(`${environment.apiUrl}${path}`, params, this.getAuth());
  }
  uploadMultipart(path: string, formdata: FormData): Observable<any> {
    return super.uploadMultipart(`${environment.apiUrl}${path}`, formdata, this.getAuth());
  }

}
