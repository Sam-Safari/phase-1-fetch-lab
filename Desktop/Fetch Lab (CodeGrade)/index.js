function fetchBooks() {
  // Return the fetch() Promise so tests can spy on it
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then((books) => {
      renderBooks(books);
      return books; // Return data for tests
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  if (!main) return;

  // Clear old content
  main.innerHTML = '';

  // Add each book as an <h2>
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Automatically run when DOM loads
document.addEventListener('DOMContentLoaded', fetchBooks);

// Export for Node (Mocha testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}
