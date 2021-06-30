import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css',
  "../../assets/css/style.css",
  "../../assets/css/skeleton.css",
  "../../assets/css/normalize.css",
  "../../assets/css/font-awesome.css",
  "../../assets/css/font-awesome.min.css",
  ]
})
export class NavigatorComponent implements OnInit {

  constructor(private location: Location) { }
  
  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
