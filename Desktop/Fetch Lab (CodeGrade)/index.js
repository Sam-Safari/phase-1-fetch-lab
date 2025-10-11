function fetchBooks() {
  // ✅ Return the fetch promise directly
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => {
      renderBooks(books);
      return books; // ✅ Ensure books are returned for the test
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');

  // ✅ Make sure there is a <main> element
  if (!main) return;

  // Clear previous content
  main.innerHTML = '';

  // ✅ Render each book title in an <h2>
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// ✅ Automatically run fetchBooks when the DOM loads
document.addEventListener('DOMContentLoaded', fetchBooks);

// ✅ Export functions for Node (Mocha testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchBooks,
    renderBooks,
  };
}
