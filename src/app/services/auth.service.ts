import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterForm } from '../models/register-form';
import { UserForm } from '../models/user-form';


const AUTH_API = "https://dummyjson.com";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  retister(data: RegisterForm): Observable<any> {
    return this.http.post(
      AUTH_API + '/auth/signup',
      {
        username: data.username,
        email: data.email,
        password: data.password,
      },
      httpOptions
    )
  }

  login(data: UserForm): Observable<any> {
    return this.http.post(`${AUTH_API}/auth/singin`, { username: data.username, password: data.password }, httpOptions)
  }
}
