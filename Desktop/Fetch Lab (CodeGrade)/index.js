function fetchBooks() {
  // ✅ Return the fetch() promise so tests can chain .then()
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // ✅ Clear previous list if rerendered
  bookList.innerHTML = "";

  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// ✅ Export functions for Node (CodeGrade)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}

// ✅ Automatically run when DOM is loaded
document.addEventListener("DOMContentLoaded", fetchBooks);
