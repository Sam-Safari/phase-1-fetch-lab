function fetchBooks() {
  return fetch("http://localhost:3000/books")   // return is important!
    .then(response => response.json())
    .then(data => renderBooks(data));
}

function renderBooks(books) {
  const list = document.getElementById("list");
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.title;
    list.appendChild(li);
  });
}