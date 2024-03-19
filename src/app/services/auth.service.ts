import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = "https://dummyjson.com";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  retister(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/auth/signup',
      {
        username,
        email,
        password
      },
      httpOptions
    )
  }
}
