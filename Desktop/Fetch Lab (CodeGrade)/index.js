// Fetches the list of Game of Thrones books and renders them on the page
function fetchBooks() {
  // Always return the fetch promise so tests can chain .then()
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}

// Renders each book name as an <h2> element inside <main>
function renderBooks(books) {
  const main = document.querySelector('main');

  // Clear the main element before adding
  main.innerHTML = '';

  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Runs fetchBooks only after the DOM has loaded
document.addEventListener('DOMContentLoaded', fetchBooks);
