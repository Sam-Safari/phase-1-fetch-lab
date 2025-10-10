function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => {
      renderBooks(books);
      return books;
    })
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector("#book-list");
  main.innerHTML = "";

  books.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.name;
    main.appendChild(p);
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks);

if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}
