// index.js

function fetchBooks() {
  // Return the fetch() call so tests can chain .then()
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data)); // Pass data to renderBooks
}

// Provided helper function to render books into the DOM
function renderBooks(books) {
  const list = document.getElementById('book-list');
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name;
    list.appendChild(li);
  });
}

// Run automatically when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);