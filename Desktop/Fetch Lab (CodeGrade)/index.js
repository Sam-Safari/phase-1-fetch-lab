function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data;
    });
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  if (!bookList) return;

  bookList.innerHTML = '';

  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// Node.js environment setup for testing
if (typeof module !== 'undefined' && module.exports) {
  const fetch = require('node-fetch');
  global.fetch = fetch;
  module.exports = { fetchBooks, renderBooks };
}

// Browser auto-run
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', fetchBooks);
}
