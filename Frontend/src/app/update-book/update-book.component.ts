import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css',
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",
    "../../assets/css/font-awesome.css",
    "../../assets/css/font-awesome.min.css",
    "../../assets/css/single.css"
  ]
})
export class UpdateBookComponent implements OnInit {



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


  constructor(private fb: FormBuilder,
    private UpdateBook: CollectionService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    let singleBookId = localStorage.getItem("singleBookId");
    this.UpdateBook.getBook(singleBookId).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
    })
  }

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



  updateBook() {
    this.UpdateBook.updateBook(this.book)
      .subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Updated", "", "success")
              .then(() => {
                this.router.navigate(['/books']);
              })
          }
          else {
            Swal.fire("Network Error", "Please do after sometime ", "error")
              .then(() => {
                this.router.navigate(['/books']);
              })

          }
        })
  }



}
