export class BookCollectionModel {
    constructor(
        public _id: String,
        public title: String,
        public pageCount: String,
        public publishedDate: String,
        public image: String,
        public about: String,
        public language: String,
        public author: String,
        public categories: String){}
}