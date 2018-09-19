pl.view.deleteBook = {
  setupUserInterface: function() {
    var deleteButton = document.forms["Book"].commit;
    var selectElement = document.forms["Book"].selectBook;
    var key = "",
      keys = [],
      book = null,
      optionElement = null;
    // load all book instance
    Book.loadAll();
    keys = Object.keys(Book.instances);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      optionElement = document.createElement("option");
      optionElement.text = book.title;
      optionElement.value = book.isbn;
      selectElement.add(optionElement, null);
    }
    deleteButton.addEventListener(
      "click",
      pl.view.deleteBook.handleDeleteButtonClickEvent
    );
    window.addEventListener("beforeunload", function() {
      Book.saveAll();
    });
  },

  handleDeleteButtonClickEvent: function() {
    var selectElement = document.forms["Book"].selectBook;
    var isbn = selectElement.value;
    if (isbn) {
      Book.destroy(isbn);
      selectElement.remove(selectElement.selectedIndex);
    }
  }
};
