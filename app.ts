import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { PublicLibrarian, UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';
import './librarianExtension';

// class LibraryBook {
//     checkout(): this {
//         console.log('Checking out a book.');
//         return this;
//     }

//     checkin(): this {
//         //console.log('Checking in a book.');
//         if (this instanceof ChildrensBook) {
//             console.log('Checking in a ChildrensBook.')
//         }

//         if (this instanceof ElectronicBook) {
//             console.log('Checking in an ElectronicBook.')
//         }
//         return this;
//     }
// }

// class ChildrensBook extends LibraryBook {
//     clean(): this {
//         console.log('Cleaning a book.');
//         return this;
//     }
// }

// class ElectronicBook extends LibraryBook {
//     removeFromCustomerDevice(): this {
//         console.log('Removing ebook from device.');
//         return this;
//     }
// }

// let kidBook = new ChildrensBook();
// kidBook.checkin().clean().checkout();

// console.log('\n');

// let ebook = new ElectronicBook();
// ebook.checkin().removeFromCustomerDevice().checkout();

// let newLibrarian = new UniversityLibrarian();
// newLibrarian.phone = '123-456-789';
// newLibrarian.hostSeminar('Informatics');

// function logVisitor(param: number | string){
//     if (typeof param === 'number') {
//         console.log(`${param} new visitor arrived.`)
//     }
//     else {
//         console.log(`${param.toUpperCase()} visisted.`)
//     }
// }

// logVisitor('Bart');
// logVisitor(1);

// let librarian: Librarian;

// librarian = new PublicLibrarian();

// if (librarian instanceof UniversityLibrarian) {
//     librarian.assistFaculty();
// }

// if (librarian instanceof PublicLibrarian) {
//     librarian.teachCommunitiy();
// }

// function isBook(text: Book | Magazine): text is Book {
//     return (<Book>text).author !== undefined;
// }

// let readingMaterial: Book | Magazine = util.GetAllBooks()[0];

// if (isBook(readingMaterial)) {
//     console.log(`The book's author is ${readingMaterial.author}.`);
// }
// else {
//     console.log(`The magazine's publisher is ${readingMaterial.publisher}.`);
// }

let librarian1 = new UniversityLibrarian();
let librarian2 = new PublicLibrarian();

try {
    librarian1.assistFaculty = () => console.log("assistFaculty replaced by console.log()")
    librarian2.teachCommunitiy = () => console.log("assistFaculty replaced by console.log()")
} catch (error) {
    console.log(error.message)
}

librarian1.assistFaculty();
librarian2.teachCommunitiy();



