import { Component, OnInit } from '@angular/core';
import { AuthorCollectionModel } from './author-collection';
import { CollectionService } from '../collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css',
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",
    "../../assets/css/font-awesome.css",
    "../../assets/css/font-awesome.min.css",
    "../../assets/css/single.css"]
})
export class SingleauthorComponent implements OnInit {
  singleauthors: AuthorCollectionModel[] = [];
  public_id: any = [];
  private sub: any;

  constructor(
    private route: ActivatedRoute, 
    private collectionservice: CollectionService, 
    private router: Router,
    public _auth : AuthService) { }

  ngOnInit() {
    console.log('router params', this.router)
    this.route.queryParams
      .subscribe((params) => {
        this.public_id = params.id;
        console.log('this.public', this.public_id); // popular
      }
      );

    this.collectionservice.getAuthor(this.public_id).subscribe((data) => {
      this.singleauthors.push(JSON.parse(JSON.stringify(data)));
    })


  //-------------------------------------------------------------------getAuthor
}
  getAuthor(_id: any) {
    console.log(_id)
  }
  //-------------------------------------------------------------------updateAuthor
  updateAuthor(singleauthor: any) {
    localStorage.setItem("singleAuthorId", singleauthor._id.toString());
    this.router.navigate(['/update-author']);

  }

  //-------------------------------------------------------------------deleteAuthor
  deleteAuthor(singleauthor: any) {
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
        this.collectionservice.deleteAuthor(singleauthor._id)
          .subscribe(
            response => {
              console.log(response, 'check');
              if (response) {
                Swal.fire("Sucessfully Deleted","","success")
                .then(()=>{
                  this.router.navigate(['/authors']);
                })
              }
              else {
                Swal.fire("Network Error", "Please do after sometime ", "error")
                .then(()=>{
                  this.router.navigate(['/authors']);
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
