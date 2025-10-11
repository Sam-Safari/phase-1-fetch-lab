// Function to fetch the Game of Thrones books from the API
function fetchBooks() {
  // Return the fetch promise so tests can detect it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => {
      renderBooks(books);
      return books; // ensure tests get the data back
    });
}

// Function to display each book title on the page
function renderBooks(books) {
  const main = document.querySelector("main");

  if (!main) return;

  main.innerHTML = "";

  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Run fetchBooks when the page finishes loading
document.addEventListener("DOMContentLoaded", fetchBooks);

// Export for CodeGrade testing environment
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    fetchBooks,
    renderBooks,
  };
}
