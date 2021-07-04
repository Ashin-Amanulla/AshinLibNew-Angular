import { Component, OnInit } from '@angular/core';
import { AuthorCollectionModel } from './author-collection';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-author-collection',
  templateUrl: './author-collection.component.html',
  styleUrls: ['./author-collection.component.css',
  "../../assets/css/style.css",
  "../../assets/css/skeleton.css",
  "../../assets/css/normalize.css",
  "../../assets/css/font-awesome.css",
  "../../assets/css/font-awesome.min.css",]
})
export class AuthorCollectionComponent implements OnInit {

  AuthorCollections: AuthorCollectionModel[]=[];
  _id: null;
  
  constructor(private AuthorCollectionservice :CollectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.AuthorCollectionservice.getAuthorCollections().subscribe((data)=>{
this.AuthorCollections=JSON.parse(JSON.stringify(data));
    })

  }
  getAuthor(_id:any){
    console.log("get authorcollection id works")
    console.log(_id);

    this.router.navigate(['/authors/details'], { queryParams: { id: _id } });
  }

}
