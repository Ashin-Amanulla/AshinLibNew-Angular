import { Component, OnInit } from '@angular/core';
import { BookCollectionModel } from './book-collection';
import { CollectionService } from '../collection.service';
import { Router } from '@angular/router';


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

  BookCollections: BookCollectionModel[] = [];
  _id: null;

  constructor(private BookCollectionservice: CollectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.BookCollectionservice.getBookCollections().subscribe((data) => {
      this.BookCollections = JSON.parse(JSON.stringify(data));
    })

  }
  getBook(_id: any) {
    console.log("get bookcollection id works")
    console.log(_id);

    this.router.navigate(['/books/details'], { queryParams: { id: _id } });

  }


}
