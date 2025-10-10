// ✅ Fetch Lab: Game of Thrones API

function fetchBooks() {
  // Return fetch() so tests and CodeGrade can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => renderBooks(books))
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector("#book-list");
  main.innerHTML = ""; // Clear any existing content

  books.forEach((book, index) => {
    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${book.name}`;
    main.appendChild(p);
  });
}

// Run when the DOM is loaded
document.addEventListener("DOMContentLoaded", fetchBooks);
