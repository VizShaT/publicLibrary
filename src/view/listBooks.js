pl.view.listBooks = {
  setupUserInterface: function() {
    var tableBodyElm = document.querySelector("table#books>tbody");
    var keys = [],
      key = "",
      row = {};
    // load all book objects
    Book.loadAll();
    keys = Object.keys(Book.instances);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyElm.insertRow();
      row.insertCell(-1).textContent = Book.instances[key].isbn;
      row.insertCell(-1).textContent = Book.instances[key].title;
      row.insertCell(-1).textContent = Book.instances[key].year;
    }
  }
};
