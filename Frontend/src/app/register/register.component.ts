import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={
    username:'',
    email:'',
    password:''
  }

  constructor(private _auth: AuthService,
    private _router:Router,private fb:FormBuilder) { }
  
  registerForm=this.fb.group (
    {
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    }
  )

  ngOnInit() {
  }

  registerUser () {
    
    // this._auth.loginUser(this.user)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token', res.token)
    //     this._router.navigate(['/login'])
    //   },
    //   err => {
    //     console.log(err);
    //     this._router.navigate(['/products'])
    //   }
    // ) 

    alert("success")
  }

}
