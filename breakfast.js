/*
const toggle = document.getElementById("filterToggle");
const container = document.getElementById("filtersContainer");
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card-other-than-home");

// Toggle filters
toggle.addEventListener("click", () => {
    container.style.display =
        container.style.display === "flex" ? "none" : "flex";
});

// Filter dishes
buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.classList.contains("hide-btn")) {
            container.style.display = "none";
            return;
        }

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach(card => {
            card.style.display =
                category === "All" || card.dataset.category === category
                    ? "block"
                    : "none";
        });
    });
});
*/

const toggle = document.getElementById("filterToggle");
const container = document.getElementById("filtersContainer");
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card-other-than-home");

// Toggle filters with animation
toggle.addEventListener("click", () => {
    container.classList.toggle("show");
});

// Filter functionality
buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Hide Filters button
        if (button.classList.contains("hide-btn")) {
            container.classList.remove("show");
            return;
        }

        // Active highlight
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach(card => {
            card.style.display =
                category === "All" || card.dataset.category === category
                    ? "block"
                    : "none";
        });
    });
});


/* ================= SEARCH TOP DISPLAY FUNCTION ================= 

const searchInput = document.querySelector(".input-hero");
const searchIcon = document.querySelector(".search-icon-breakfast");
const topContainer = document.querySelector(".new-home-search-div-to-be-inserted-here");

function showDishOnTop() {
    const searchValue = searchInput.value.toLowerCase().trim();

    if (!searchValue) {
        topContainer.innerHTML = "";
        return;
    }

    let foundCard = null;

    cards.forEach(card => {
        const title = card
            .querySelector(".card-title-other-than-home")
            .textContent
            .toLowerCase();

        if (title.includes(searchValue)) {
            foundCard = card;
        }
    });

    if (foundCard) {
        topContainer.innerHTML = foundCard.outerHTML;
    } else {
        topContainer.innerHTML = "<h2 style='text-align:center;'>No Dish Found</h2>";
    }
}

// Click search icon
searchIcon.addEventListener("click", showDishOnTop);

// Press Enter
searchInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        showDishOnTop();
    }
});
*/

/* ================= SEARCH TOP DISPLAY FUNCTION ================= */

const searchInput = document.querySelector(".input-hero");
const searchIcon = document.querySelector(".search-icon-breakfast");
const topContainer = document.querySelector(".new-home-search-div-to-be-inserted-here");
//const cards = document.querySelectorAll(".card-other-than-home");

function showDishOnTop() {
    const searchValue = searchInput.value.toLowerCase().trim();

    // If empty → clear top section
    if (!searchValue) {
        topContainer.innerHTML = "";
        return;
    }

    let foundCard = null;

    cards.forEach(card => {
        const title = card
            .querySelector(".card-title-other-than-home")
            .textContent
            .toLowerCase();

        if (title.includes(searchValue) && !foundCard) {
            foundCard = card;
        }
    });

    if (foundCard) {
        topContainer.innerHTML = foundCard.outerHTML;
    } else {
        topContainer.innerHTML =
            "<h2 style='text-align:center;'>No Dish Found</h2>";
    }
}

/* ✅ LIVE SEARCH WHILE TYPING */
searchInput.addEventListener("input", showDishOnTop);

/* Click search icon */
searchIcon.addEventListener("click", showDishOnTop);