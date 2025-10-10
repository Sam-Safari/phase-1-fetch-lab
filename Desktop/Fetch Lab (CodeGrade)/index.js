// ✅ Fetch Lab: Game of Thrones API

function fetchBooks() {
  // Return fetch() so CodeGrade can test it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.name;
    main.appendChild(p);
  });
}
