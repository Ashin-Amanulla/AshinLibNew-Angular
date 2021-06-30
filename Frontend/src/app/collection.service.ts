import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient) { }
  getBookCollections(){
    return this.http.get("http://localhost:8887/group/books")
  }
  getBook(id:any){
    console.log("entering")
    return this.http.get("http://localhost:8887/group/books"+id);
  }
  getAuthorCollections(){
    return this.http.get("http://localhost:8887/group/authors")
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:8887/group/authors"+id);
  }
}
