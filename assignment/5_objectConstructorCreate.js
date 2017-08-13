//Create books again, this time with object constructor syntax
// Write a constructor function to create 'Book' objects with the same four properties as above.
// Write the constructor function here:
function Book(title, author, pageCount, haveRead) {
  // Write code here
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

function createBooksWithConstructor() {
  // In this function, create 3 new 'Book' objects by using the constructor function you wrote above.
  // Write code here:
var book1 = new Book('The Hunger Games', 'Suzanne Collins', 374, true);
var book2 = new Book('Sphere', 'Michael Crichton', 385, true);
var book3 = new Book('A Child Called It', 'Dave Pelzer', 195, true);
  // Store these new books in an array called books.
  // Write code here
var books = new Array();
books[0] = book1;
books[1] = book2;
books[2] = book3;
  // return our array of books
  return books;
}

// call createBooksWithConstructor and console log the return
console.log(createBooksWithConstructor());
