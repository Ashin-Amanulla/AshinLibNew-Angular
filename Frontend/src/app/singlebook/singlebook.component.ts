import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { BookCollectionModel } from './book-collection';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css',
    "../../assets/css/style.css",
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",
    "../../assets/css/font-awesome.css",
    "../../assets/css/font-awesome.min.css",]
})
export class SinglebookComponent implements OnInit {

  singlebooks: BookCollectionModel[]=[];
  id = {};

  constructor(private collectionservice: CollectionService) { }

  ngOnInit(): void {
    this.collectionservice.getBook(this.id).subscribe((data) => {
      this.singlebooks = JSON.parse(JSON.stringify(data));
    })

  }
}