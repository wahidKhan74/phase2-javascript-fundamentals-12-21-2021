import {showBook, Book, BOOK_SHOP} from './book-module.mjs';

console.log("The book shop : ", BOOK_SHOP);

showBook('JavaScript : The good parts', 'Douglas Crockford');

let book = new Book('JavaScript : The good parts', 'Douglas Crockford');
console.log(book);
book.display();