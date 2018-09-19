function Book(slots) {
  this.isbn = slots.isbn;
  this.title = slots.title;
  this.year = slots.year;
}

// Collection of all book instances
Book.instances = {};

// Creating a new Book instance
Book.add = function(slots) {
  var book = new Book(slots);
  // add book to the collection of book instances
  Book.instances[slots.isbn] = book;
  console.log(Book.instances[slots.isbn]);
  console.log("Book " + slots.isbn + " created.");
};

Book.convertRow2Obj = function(bookRow) {
  var book = new Book(bookRow);
  return book;
};
// Loading all Book instances
Book.loadAll = function() {
  var key = "",
    keys = [],
    bookString = "",
    books = {};
  try {
    if (localStorage["books"]) {
      bookString = localStorage["books"];
    }
  } catch (e) {
    alert("Error while reading the localStorage\n", e);
  }
  if (bookString) {
    books = JSON.parse(bookString);
    keys = Object.keys(books);

    console.log(keys.length + " books loaded.");
    for (var i = 0; i < keys.length; ++i) {
      key = keys[i];
      console.log(key);
      console.log(Book.instances);
      Book.instances[key] = Book.convertRow2Obj(books[key]);
    }
  }
};

// Updating a book instance
Book.update = function(slots) {
  var book = Book.instances[slots.isbn];
  var year = parseInt(slots.year);
  if (book.title !== slots.title) book.title = slots.title;
  if (book.year !== slots.year) book.year = year;
  console.log("Book " + slots.isbn + " modified.");
};

// Deleting a Book instance
Book.destroy = function(isbn) {
  if (Book.instances[isbn]) {
    console.log("Book " + isbn + " deleted.");
    delete Book.instances[isbn];
  } else {
    console.log("There is no book with ISBN " + isbn + " in the database");
  }
};

// Saving all Book instance
Book.saveAll = function() {
  var bookString = "",
    error = false;
  var numberOfBooks = Object.keys(Book.instances).length;
  try {
    bookString = JSON.stringify(Book.instances);
    console.log(bookString);
    localStorage["books"] = bookString;
  } catch (e) {
    alert("Error while writing to localStorage.", e);
    error = true;
  }
  if (!error) {
    console.log(numberOfBooks + " books saved.");
  }
};

// Creating test data
Book.createTestData = function() {
  Book.instances["006251587X"] = new Book({
    isbn: "006251587X",
    title: "Weaving the wave",
    year: 2018
  });
  Book.instances["0465026567"] = new Book({
    isbn: "0465026567",
    title: "On the top",
    year: 2015
  });
  Book.instances["0465030793"] = new Book({
    isbn: "0465030793",
    title: "Tutu Keru mar",
    year: 2014
  });
  Book.saveAll();
  console.log(Book.instances);
  console.log("Test data created.");
};

// Clearing all data
Book.clearAllData = function() {
  if (confirm("Do you really want to delete all data ?")) {
    localStorage["books"] = {};
  }
};
