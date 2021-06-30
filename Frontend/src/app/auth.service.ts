import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:8887/login";

  constructor(private http: HttpClient) { }


  loginUser(user: any) {
    console.log('user', user)
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  userrole()
  {
    return localStorage.getItem('role')
  }
}

