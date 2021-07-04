import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.css']
})
export class LoginheaderComponent implements OnInit {


  constructor(public _auth:AuthService,
    private _router:Router) { }

  ngOnInit(): void {
  }

}
