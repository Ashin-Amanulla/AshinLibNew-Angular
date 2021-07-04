import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css',
  "../../assets/css/skeleton.css",
  "../../assets/css/normalize.css",
  "../../assets/css/font-awesome.css",
  "../../assets/css/font-awesome.min.css",
  "../../assets/css/single.css",
]
})
export class UpdateAuthorComponent implements OnInit {

  author = {
    title: '',
    country: '',
    dob: '',
    image: '',
    about: '',
    FamousWorks: ''
  }

constructor(private fb: FormBuilder,
    private UpdateAuthor: CollectionService,
    private router: Router) { }

    

  ngOnInit(): void {
    let singleAuthorId = localStorage.getItem("singleAuthorId");
    console.log("hjghjghj",singleAuthorId)
    this.UpdateAuthor.getAuthor(singleAuthorId).subscribe((data) => {
      this.author = JSON.parse(JSON.stringify(data));
    })
  }

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

  updateAuthor() {
    this.UpdateAuthor.updateAuthor(this.author)
      .subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Updated", "", "success")
              .then(() => {
                this.router.navigate(['/authors']);
              })
          }
          else {
            Swal.fire("Network Error", "Please do after sometime ", "error")
              .then(() => {
                this.router.navigate(['/authors']);
              })

          }
        })
  }



}
