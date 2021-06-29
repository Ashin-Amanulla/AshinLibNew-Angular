import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:8887/login";

  constructor(private http: HttpClient) { }


  loginUser(user: any) {
    console.log('user', user)
    return axios.post(this._loginUrl, user)
  }

}

