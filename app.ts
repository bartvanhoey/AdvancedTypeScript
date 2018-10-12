import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo(book: Book): void {
    // console.log(`${book.title} was authored by ${book.author}`);
}

function PrintBookInfoWithDestruct({ title: bookTitle, author: bookAuthor }: Book): void {
    //console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

let [book1, book2] = util.GetAllBooks();
// PrintBookInfo(book1);
// PrintBookInfo(book2);

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    //console.log(others);
    others.forEach(x => PrintBookInfo(x));
}

LogFavoriteBooks(util.GetAllBooks());

let { title, author } = book1;
// console.log('\n')
// console.log('Details Book1')
// console.log("title book1: ", title)
// console.log("author book1: ", author)

let { title: bookTitle, author: bookAuthor } = book2;
// console.log('\n')
// console.log('Details Book2')
// console.log("title book2: ", bookTitle)
// console.log("author book2: ", bookAuthor)
// console.log('\n')


//console.log("Print Book details with destruct")
PrintBookInfoWithDestruct(book1);

let schoolBooks: Book[] = [
    { id: 10, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: Category.Fiction },
    { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', available: true, category: Category.Fiction },
    { id: 12, title: 'Clear Light of Day', author: 'Anita Desai', available: true, category: Category.Fiction }
];

let booksRead: Book[] = util.GetAllBooks();
booksRead.push(...schoolBooks);
//console.log(booksRead);


let poets: string[] = ['Shelley', 'Collings', 'Hughes'];
let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
//console.log(authors)

//let catalogLocation: [string, Book] = ['A 123.456', book1];

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];
//console.log("location: ", catalogLocation[0])
//console.log("book: ", catalogLocation[1])

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

//let readingMaterial: Book | Magazine = allMagazines[0];
let readingMaterial: PrintMaterial = allMagazines[0];

//console.log("magazine title: ", readingMaterial.title);
//console.log("magazine publisher: ", readingMaterial.publisher);

// function PrintTitle(item: Book | Magazine) {
 function PrintTitle(item: PrintMaterial) {
   //  console.log("The title of the reading item is: ", item.title);
 }

//PrintTitle(allBooks[0]);
//PrintTitle(allMagazines[0]);
PrintTitle(readingMaterial);

//let serialNovel: Book & Magazine = {
let serialNovel: Serial = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: Category.Fiction,
    publisher: 'Serial Press'
};

function applyMixins(derivedConstructor: any, baseConstructors: any[]){
    baseConstructors.forEach(baseConstructor => {
        Object.getOwnPropertyNames(baseConstructor.prototype)
            .forEach(name => {
                derivedConstructor.prototype[name] =baseConstructor.prototype[name];
            });
    });
}

applyMixins(UniversityLibrarian, [Employee, Researcher]);

let newLibrarian = new UniversityLibrarian();

newLibrarian.title = "Employee & Researcher";
//newLibrarian.logTitle();
//newLibrarian.doResearch('Economics');

//let frequency: 'monthly' | 'annually' = 'annually';

type Frequency = 'monthly' | 'annually';

function getMagazineByFrequency(preferredFrequency: Frequency){
    // do something here
}

type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;











