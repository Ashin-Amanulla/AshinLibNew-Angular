import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';



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
    this._auth.loginUser(this.user)
      .subscribe(
        response => {
          let result = response;
          if (result.status) {
            localStorage.setItem('token', response.token)
            localStorage.setItem('role', response.role)
            this._router.navigate(['/home']);
          } else {
            Swal.fire(
              'Warning!!',
              'User not found!',
              'error')
              .then (
                refresh =>{
                  window.location.reload();
              }) 
          }
        })

      }

}

