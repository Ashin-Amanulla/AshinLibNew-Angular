import { Component, OnInit } from '@angular/core';
import { AuthorCollectionModel } from './author-collection';
import { CollectionService } from '../collection.service';

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
  id ={};

  constructor(private AuthorCollectionservice :CollectionService) { }

  ngOnInit(): void {
    this.AuthorCollectionservice.getAuthorCollections().subscribe((data)=>{
this.AuthorCollections=JSON.parse(JSON.stringify(data));
    })

  }
  getBook(id:any){
    console.log("this works")
  }

}
