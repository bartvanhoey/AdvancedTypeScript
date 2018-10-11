import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem} from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo(book: Book): void {
    console.log(`${book.title} was authored by ${book.author}`);
}

function PrintBookInfoWithDestruct({title: bookTitle, author: bookAuthor}: Book): void {
    console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

let [book1, book2] = util.GetAllBooks();
// PrintBookInfo(book1);
// PrintBookInfo(book2);

function LogFavoriteBooks([book1, book2, ...others]: Book[]){
        PrintBookInfo(book1);
        PrintBookInfo(book2);
        //console.log(others);
        others.forEach(x => PrintBookInfo(x));
}

LogFavoriteBooks(util.GetAllBooks());

let { title, author } = book1;
console.log('\n')
console.log('Details Book1')
console.log("title book1: ", title)
console.log("author book1: ", author)

let { title: bookTitle, author: bookAuthor } = book2;
console.log('\n')
console.log('Details Book2')
console.log("title book2: ", bookTitle)
console.log("author book2: ", bookAuthor)
console.log('\n')


console.log("Print Book details with destruct")
PrintBookInfoWithDestruct(book1);
