import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient
  ) { }
  
  server_address :string ='/api';
  // server_address :string ='http://localhost:8887';


  getBookCollections() {
    return this.http.get(`${this.server_address}/group/books`)
  }

  getBook(_id: any) {
    return this.http.get(`${this.server_address}/group/books/` + _id);
  }

  getAuthorCollections() {
    return this.http.get(`${this.server_address}/group/authors`)
  }

  getAuthor(_id: any) {
    return this.http.get(`${this.server_address}/group/authors/` + _id);
  }

  newBook(item: any) {
    return this.http.post(`${this.server_address}/add/add_book`, { "book": item })
  }

  newAuthor(item: any) {
    return this.http.post(`${this.server_address}/add/add_author`, { "author": item })
  }

  deleteBook(_id: any) {
    return this.http.delete(`${this.server_address}/delete/deletebook/` + _id);
  }

  updateBook(item: any) {
    return this.http.post(`${this.server_address}/add/update_book`, {"book": item})
  }

  deleteAuthor(_id: any) {
    return this.http.delete(`${this.server_address}/delete/deleteauthor/` + _id);
  }

  updateAuthor(item: any) {
    return this.http.post(`${this.server_address}/add/update_author`, {"author": item})
  }

  newUser(item: any) {
    return this.http.post(`${this.server_address}/login/signup`, { "user": item })
  }

}
