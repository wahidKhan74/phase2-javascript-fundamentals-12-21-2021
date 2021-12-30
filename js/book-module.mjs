export function showBook(name, author) {
    console.log(`The book ${name} it written by author ${author}`);
}

export class Book {

    constructor(name,author){
        this.name = name;
        this.author = author;
    }

    display() {
        console.log(`The book - ${this.name} it written by author - ${this.author}`);
    }
} 

export const BOOK_SHOP =" << The Globals >> ";