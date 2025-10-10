// index.js

function fetchBooks() {
  // Return the fetch() call for the tests to chain .then()
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// Ensure CodeGrade can run this in Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}

// Automatically call when DOM loads
document.addEventListener("DOMContentLoaded", fetchBooks);