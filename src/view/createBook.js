pl.view.createBook = {
  setupUserInterface: function() {
    var saveButton = document.forms["Book"].commit;
    // load all book objects
    Book.loadAll();
    // Set an event listener of save/submit button
    saveButton.addEventListener(
      "click",
      pl.view.createBook.handleSaveButtonclickEvent
    );
    //
    window.addEventListener("beforeunload", function() {
      Book.saveAll();
    });
  },
  // Save user input date
  handleSaveButtonclickEvent: function() {
    var formElement = document.forms["Book"];
    var slots = {
      isbn: formElement.isbn.value,
      title: formElement.title.value,
      year: formElement.year.value
    };
    Book.add(slots);
    formElement.reset();
  }
};
