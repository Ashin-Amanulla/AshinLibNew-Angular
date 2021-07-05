import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _loginUrl = "http://localhost:8887/login";
  server_address :string ='/api';


  constructor(private http: HttpClient) { }


  loginUser(user: any) {
    return this.http.post<any>(`${this.server_address}/login`, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken()
  {
    return localStorage.getItem('token')
  }
  
  getUser()
  {
    console.log(localStorage.getItem('role'))
    return localStorage.getItem('role')
  }
}

