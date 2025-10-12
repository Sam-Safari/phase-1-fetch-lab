const BASE_URL = "http://localhost:3000/ramens";
let currentRamen = null;

function displayRamens() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(ramens => {
      const ramenMenu = document.getElementById("ramen-menu");
      ramenMenu.innerHTML = "";

      ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;

        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });

      if (ramens.length > 0) handleClick(ramens[0]);
    })
    .catch(err => console.error("Error loading ramens:", err));
}

function handleClick(ramen) {
  currentRamen = ramen;
  document.getElementById("detail-image").src = ramen.image;
  document.getElementById("name").textContent = ramen.name;
  document.getElementById("restaurant").textContent = ramen.restaurant;
  document.getElementById("rating").textContent = ramen.rating;
  document.getElementById("comment").textContent = ramen.comment;
}

function addSubmitListener() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", e => {
    e.preventDefault();

    const newRamen = {
      name: document.getElementById("new-name").value,
      restaurant: document.getElementById("new-restaurant").value,
      image: document.getElementById("new-image").value,
      rating: document.getElementById("add-rating").value,
      comment: document.getElementById("add-comment").value
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRamen)
    })
      .then(res => res.json())
      .then(addedRamen => {
        renderNewRamen(addedRamen);
        form.reset();
      });
  });
}

function renderNewRamen(ramen) {
  const ramenMenu = document.getElementById("ramen-menu");
  const img = document.createElement("img");
  img.src = ramen.image;
  img.alt = ramen.name;

  img.addEventListener("click", () => handleClick(ramen));
  ramenMenu.appendChild(img);
}

function addEditListener() {
  const form = document.getElementById("edit-ramen");

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!currentRamen) return;

    const updatedRamen = {
      ...currentRamen,
      rating: document.getElementById("new-rating").value,
      comment: document.getElementById("new-comment").value
    };

    fetch(`${BASE_URL}/${currentRamen.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRamen)
    })
      .then(res => res.json())
      .then(data => {
        handleClick(data);
        alert("Ramen updated successfully!");
      });
  });
}

function addDeleteListener() {
  const deleteBtn = document.getElementById("delete-btn");

  deleteBtn.addEventListener("click", () => {
    if (!currentRamen) return;

    fetch(`${BASE_URL}/${currentRamen.id}`, { method: "DELETE" })
      .then(() => {
        alert(`${currentRamen.name} deleted!`);
        displayRamens();
        document.getElementById("ramen-detail").querySelector("img").src = "";
        document.getElementById("name").textContent = "Name";
        document.getElementById("restaurant").textContent = "Restaurant";
        document.getElementById("rating").textContent = "N/A";
        document.getElementById("comment").textContent = "N/A";
      });
  });
}

function main() {
  displayRamens();
  addSubmitListener();
  addEditListener();
  addDeleteListener();
}

document.addEventListener("DOMContentLoaded", main);
