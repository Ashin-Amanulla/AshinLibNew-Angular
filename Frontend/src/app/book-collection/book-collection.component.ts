import { Component, OnInit } from '@angular/core';
import { BookCollectionModel } from './book-collection';
import { CollectionService } from '../collection.service';


@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css',
  "../../assets/css/style.css",
  "../../assets/css/skeleton.css",
  "../../assets/css/normalize.css",
  "../../assets/css/font-awesome.css",
  "../../assets/css/font-awesome.min.css",]
})
export class BookCollectionComponent implements OnInit {

    BookCollections: BookCollectionModel[]=[];
    id ={};
  
    constructor(private collectionservice :CollectionService) { }
  
    ngOnInit(): void {
      this.collectionservice.getBookCollections().subscribe((data)=>{
  this.BookCollections=JSON.parse(JSON.stringify(data));
      })
  
    }
    getBook(id:any){
      console.log("this works")
    }
  
  
}
