import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private _auth: AuthService,
    private _router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }

  signinForm = this.fb.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required]
    }
  )

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.user).then(function (response) {
      console.log(response)
      let result = response.data
          if (result.status) {
            alert("success")
            // localStorage.setItem('token', response.token)
            // this._router.navigate(['/home'])
          } else {
            alert(result.status)
          }
    })
    .catch(function (error) {
      alert("error")
    });
  }

}

