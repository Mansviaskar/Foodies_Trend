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


/* ---------------- HERO SEARCH RESULT CARD ---------------- */

document.addEventListener("DOMContentLoaded", function () {

  const heroInput = document.getElementById("heroSearch");
  const heroBtn = document.getElementById("heroSearchBtn");
  const resultContainer = document.querySelector(".new-other-than-home-search-div-to-be-inserted-here");

  const recipeDatabase = [
    {
      name: "dosa",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "brownie",
      image: "https://www.mygingergarlickitchen.com/wp-content/recipe-steps-images/brownie-in-a-mug/brownie-in-a-mug-step-1-8.jpg",
      ingredients: "Cocoa, Flour, Sugar...",
      time: "5 Min",
      link: "./dessert/brownie.html"
    },
    {
      name: "dhokla",
      image: "https://www.goanobserver.in/wp-content/uploads/2018/10/dhokla.jpg",
      ingredients: "gram flour, rava, Soda, Salt...",
      time: "15 Min",
      link: "./breakfast/dhokla.html"
    },
    {
      name: "poha",
      image: "https://foodtasted.org/wp-content/uploads/2019/02/Poha-1280x720.jpg",
      ingredients: "poha, peanuts, onion, Salt...",
      time: "10 Min",
      link: "./breakfast/poha.html"
    },
    {
      name: "idli",
      image: "https://www.indianfoodforever.com/iffwd/wp-content/uploads/idli-sambhar-1280x720.jpg",
      ingredients: "Urad Dal, idli rava, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/idli.html"
    },
    {
      name: "egg bhurji",
      image: "https://www.flavorsofmumbai.com/wp-content/uploads/2015/04/Egg-Bhurji-Recipe-4-1280x720.jpg",
      ingredients: "eggs, onions, oil, Salt...",
      time: "10 Min",
      link: "./breakfast/eggBhurji.html"
    },
    {
      name: "noodles",
      image: "https://i.ytimg.com/vi/SWVm_BzfnU4/maxresdefault.jpg",
      ingredients: "rice noodles, water, sauce Salt...",
      time: "10 Min",
      link: "./breakfast/noodles.html"
    },
    {
      name: "vada",
      image: "https://hirasweets.com/wp-content/uploads/2020/06/vada-sambhar-1280x720.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/vada.html"
    },
    {
      name: "rawa upma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62An25qATwuE83QS6U4uid1_fK5kigq9gMQ&s",
      ingredients: "rawa, water, peanut, Salt...",
      time: "12 Min",
      link: "./breakfast/RawaUpma.html"
    },
    {
      name: "pao bhaji",
      image: "https://content.jdmagicbox.com/comp/def_content/pav-bhaji-centres/pav-bhaji-recipe-in-hindi-1280x720-pav-bhaji-centres-9-n86dx.jpg",
      ingredients: "vegetables, pao bhaji masala, oil, Salt...",
      time: "40 Min",
      link: "./snacks/PaoBhaji.html"
    },
    {
      name: "pani puri",
      image: "https://www.hungryforever.com/wp-content/uploads/2018/08/gol-gappa-2nd-banner-1280x720.jpg",
      ingredients: "all spices, potato, onion, Salt...",
      time: "45 Min",
      link: "./snacks/paniPuri.html"
    },
    {
      name: "papdi chat",
      image: "https://www.hungryforever.com/wp-content/uploads/2016/01/Featured-image-papdi-chaat-1280x720.jpg",
      ingredients: "curd, maida papdi, yogurt, Salt...",
      time: "12 Min",
      link: "./snacks/papdiChat.html"
    },
    {
      name: "rasmalai",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "plain dal",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "aalo biryani",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "egg biryani",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "palak paneer",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "paneer pulao",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "veg biryani",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
    {
      name: "sambhar",
      image: "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
      ingredients: "Urad Dal, Soda, Salt...",
      time: "30 Min",
      link: "./breakfast/dosa.html"
    },
  ];

  function showResult() {

    const value = heroInput.value.toLowerCase().trim();

    resultContainer.innerHTML = "";

    if (value === "") return;

    const found = recipeDatabase.find(r => r.name.includes(value));

    if (!found) {
      resultContainer.innerHTML = "<p style='margin-top:20px;'>No recipe found 😔</p>";
      return;
    }

    resultContainer.innerHTML = `
      <div class="search-result-card">
        <img src="${found.image}" class="search-result-img">

        <div class="search-result-content">
          <h2 class="search-result-title">${found.name.toUpperCase()}</h2>
          <p><strong>Ingredients :</strong> ${found.ingredients}</p>
          <p><strong>Time Taken To Cook :</strong> ${found.time}</p>
          <p>⭐⭐⭐⭐⭐</p>
          <a href="${found.link}">
            <button class="button-home-card">Let's Cook</button>
          </a>
        </div>
      </div>
    `;
  }

  heroInput.addEventListener("keyup", showResult);
  heroBtn.addEventListener("click", showResult);

});