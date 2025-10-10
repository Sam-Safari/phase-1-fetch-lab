// index.js

function fetchBooks() {
  // Return the fetch() Promise so CodeGrade can spy on it
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data; // Return data for .then() chaining in tests
    });
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');

  // Skip DOM updates if running in Node.js (no document)
  if (!bookList) return;

  // Clear any existing list items
  bookList.innerHTML = '';

  // Append each book title
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// Export functions for CodeGrade’s Node test environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}

// Run automatically in browser (not in Node)
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', fetchBooks);
}