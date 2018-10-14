import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
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

let newLibrarian = new UniversityLibrarian();
newLibrarian.phone = '123-456-789';
newLibrarian.hostSeminar('Informatics');

















