/* ---------------- CAROUSEL AUTO SLIDE ---------------- */

const slides = document.querySelectorAll(".carousel-item");
let index = 0;

slides[index].classList.add("active");

setInterval(() => {
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

/* ---------------- SCROLL REVEAL ---------------- */

const reveals = document.querySelectorAll(".card-home, .confused-know-what-to-cook");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("reveal");
      el.classList.add("active");
    }
  });
});

/* ---------------- TIME BASED SUGGESTION ---------------- */

const recipes = [
  { name: "Dosa", time: 30 },
  { name: "EGG BHURJI", time: 10 },
  { name: "SANDWITCH", time: 10 },
  { name: "RICE NOODLES", time: 30 },
  { name: "Congee", time: 12 },
  { name: "Sambar", time: 50 },
  { name: "Brownie", time: 5 },
  { name: "Papdi Chat", time: 15 }
];

document.querySelector(".button-search").addEventListener("click", () => {
  const time = Number(document.querySelector(".select-options").value);
  const resultDiv = document.querySelector(".search-result");

  const filtered = recipes.filter(r => r.time <= time);

  resultDiv.innerHTML = "";

  if (!filtered.length) {
    resultDiv.innerHTML = "<p>No recipes found 😔</p>";
    return;
  }

  filtered.forEach(r => {
    resultDiv.innerHTML += `
      <div class="card-home">
        <div class="card-body">
          <p class="card-title">${r.name}</p>
          <p class="card-time">Time Taken: ${r.time} min</p>
          <button class="button-home-card">Let's Cook</button>
        </div>
      </div>
    `;
  });
});

