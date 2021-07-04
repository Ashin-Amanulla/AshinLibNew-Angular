import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { CollectionService } from '../collection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    email: '',
    password: ''
  }
  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/

  constructor(private _auth: AuthService,
    private router: Router, private fb: FormBuilder,
    private AddUser: CollectionService) { }

  registerForm = this.fb.group(
    {
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.regexp)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }
  )

  ngOnInit() {
  }


  registerUser() {
    this.AddUser.newUser(this.user).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "","success")
          .then(() => {
            this.router.navigate(['/']);
          })          }
        else {
          console.log("Network Error")
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['/register']);
            })

        }
      })
  }
}



