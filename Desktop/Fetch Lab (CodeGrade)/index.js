// index.js

function fetchBooks() {
  // Return the fetch Promise so CodeGrade tests can chain .then()
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data; // Ensure the data is returned for testing
    });
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // Skip if running in Node (no document)
  if (!bookList) return;

  // Clear the list first
  bookList.innerHTML = "";

  // Render each book title
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// Export for Node.js (CodeGrade tests)
if (typeof module !== "undefined") {
  module.exports = { fetchBooks, renderBooks };
}

// Run automatically in browser
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", fetchBooks);
}
