import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css',
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",
    "../../assets/css/font-awesome.css",
    "../../assets/css/font-awesome.min.css",
    "../../assets/css/single.css",]
})
export class AddauthorComponent implements OnInit {

  author = {
    title: '',
    country: '',
    dob: '',
    image: '',
    about: '',
    FamousWorks: ''
  }

  constructor(private fb: FormBuilder,
    private AddAuthor: CollectionService,
    private router: Router) { }

    addauthorForm = this.fb.group(
      {
        title: ['', Validators.required],
        country: ['', Validators.required],
        dob: ['', Validators.required],
        image: ['', Validators.required],
        about: ['', Validators.required],
        FamousWorks: ['', Validators.required],
      }
    )

    addNewAuthor(){
      this.AddAuthor.newAuthor(this.author).subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['/authors']);
            })          }
          else {
            Swal.fire("Network Error", "Please do after sometime ", "error")
              .then(() => {
                this.router.navigate(['/addauthor']);
              })

          }
        })
      }

  ngOnInit(): void {
  }

}
