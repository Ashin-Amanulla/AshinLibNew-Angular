import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css',
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",
    "../../assets/css/font-awesome.css",
    "../../assets/css/font-awesome.min.css",
    "../../assets/css/single.css"

    ,]
})

export class AddbookComponent implements OnInit {

  images: any;
  book = {
    title: '',
    pageCount: '',
    publishedDate: '',
    image: '',
    about: '',
    language: '',
    author: '',
    categories: ''
  }


  public choosen = false;
  public submitted = false;


  constructor(private fb: FormBuilder,
    private AddBook: CollectionService,
    private router: Router,
    private http: HttpClient
  ) { }

  addbookForm = this.fb.group(
    {
      title: ['', Validators.required],
      pageCount: ['', Validators.required],
      publishedDate: ['', Validators.required],
      image: ['', Validators.required],
      about: ['', Validators.required],
      language: ['', Validators.required],
      author: ['', Validators.required],
      categories: ['', Validators.required]
    }
  )



  addnewbook() {
    this.AddBook.newBook(this.book)
      .subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Added", "","success")
            .then(() => {
              this.router.navigate(['/books']);
            })          }
          else {
            console.log("Network Error")
            Swal.fire("Network Error", "Please do after sometime ", "error")
              .then(() => {
                this.router.navigate(['/addbook']);
              })

          }
        })
  }

  ngOnInit(): void {
  }


}






