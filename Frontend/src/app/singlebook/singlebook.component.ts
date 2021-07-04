import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { BookCollectionModel } from './book-collection';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css',
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",
    "../../assets/css/font-awesome.css",
    "../../assets/css/font-awesome.min.css",
    "../../assets/css/single.css",
  ]
})
export class SinglebookComponent implements OnInit {

  singlebooks: BookCollectionModel[] = [];
  public_id: any = [];


  constructor(
    private route: ActivatedRoute,
    private collectionservice: CollectionService,
    private router: Router,
    private http: HttpClient,
    public _auth: AuthService,
  ) { }

  ngOnInit() {
    console.log('router params', this.router)
    this.route.queryParams
      .subscribe((params) => {
        this.public_id = params.id;
        console.log('this.public', this.public_id); // popular
      }
      );

    this.collectionservice.getBook(this.public_id).subscribe((data) => {
      this.singlebooks.push(JSON.parse(JSON.stringify(data)));
      console.log('this.singlebooks book id details', this.singlebooks)
    })

  }

  //-------------------------------------------------------------------getBook

  getBook(_id: any) {
    console.log("get single book id works")
    console.log(_id)
  }
  //-------------------------------------------------------------------updateBook

  updateBook(singlebook: any) {
    localStorage.setItem("singleBookId", singlebook._id.toString());
    this.router.navigate(['/update-book']);

  }

  //-------------------------------------------------------------------deleteBook

  deleteBook(singlebook: any) {
    Swal.fire({
      title: "Are you sure?",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, archive it!",
      denyButtonText: "No, cancel please!",
      showDenyButton: true,
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.collectionservice.deleteBook(singlebook._id)
          .subscribe(
            response => {
              if (response) {
                Swal.fire("Sucessfully Deleted", "success")
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
            }

          )

      } else {
        Swal.fire("Cancelled", "Your  file is safe ", "error");
      }

    })
  }
}