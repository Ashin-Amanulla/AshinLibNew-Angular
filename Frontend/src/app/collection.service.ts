import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient
  ) { }


  getBookCollections() {
    return this.http.get("http://localhost:8887/group/books")
  }

  getBook(_id: any) {
    return this.http.get("http://localhost:8887/group/books/" + _id);
  }

  getAuthorCollections() {
    return this.http.get("http://localhost:8887/group/authors")
  }

  getAuthor(_id: any) {
    return this.http.get("http://localhost:8887/group/authors/" + _id);
  }

  newBook(item: any) {
    return this.http.post("http://localhost:8887/add/add_book", { "book": item })
  }

  newAuthor(item: any) {
    return this.http.post("http://localhost:8887/add/add_author", { "author": item })
  }

  deleteBook(_id: any) {
    return this.http.delete("http://localhost:8887/delete/deletebook/" + _id);
  }

  updateBook(item: any) {
    return this.http.post("http://localhost:8887/add/update_book", {"book": item})
  }

  deleteAuthor(_id: any) {
    return this.http.delete("http://localhost:8887/delete/deleteauthor/" + _id);
  }

  updateAuthor(item: any) {
    return this.http.post("http://localhost:8887/add/update_author", {"author": item})
  }

  newUser(item: any) {
    return this.http.post("http://localhost:8887/login/signup", { "user": item })
  }

}
