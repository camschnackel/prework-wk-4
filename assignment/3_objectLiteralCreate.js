// Create books with object literal syntax
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount.
  // Write code here:
var book1 = {
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  pageCount: 374,
}
var book2 = {
  title: 'Sphere',
  author: 'Michael Crichton',
  pageCount: 385,
}
var book3 = {
  title: 'A Child Called It',
  author: 'Dave Pelzer',
  pageCount: 195,
}
  // Add a property of haveRead to each book object you created. This should be set to true or false.
  // Write code here:
book1.haveRead = true;
book2.haveRead = true;
book3.haveRead = true;
  // Store these objects in an array called books.
  // Write code here:
var books = [book1, book2, book3];
  // return this array
  return books;
}

// call threeBooks and console log the return
console.log(threeBooks());
