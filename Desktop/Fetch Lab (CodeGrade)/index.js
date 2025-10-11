// index.js
function fetchBooks() {
  return fetch("http://localhost:3000/books") // ✅ Return the fetch
    .then(response => response.json())
    .then(data => renderBooks(data)); // Pass JSON object to renderBooks()
}

function renderBooks(books) {
  const list = document.getElementById("book-list");
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.title;
    list.appendChild(li);
  });
}

// Call fetchBooks so it runs when page loads
fetchBooks();
