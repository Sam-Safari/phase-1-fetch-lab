// index.js

function fetchBooks() {
  // ✅ Always return the fetch() Promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => {
      renderBooks(books);
      return books; // ✅ Return books so tests can chain .then()
    });
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // ✅ Skip rendering when no DOM exists (for Node tests)
  if (!bookList) return;

  // ✅ Clear list first
  bookList.innerHTML = "";

  // ✅ Append book names
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// ✅ Export for Node.js tests (CodeGrade)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}

// ✅ Auto-run only when in browser
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", fetchBooks);
}
