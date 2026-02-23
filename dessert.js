/* ================= FILTER SECTION ================= */

const toggle = document.getElementById("filterToggle");
const container = document.getElementById("filtersContainer");
const buttons = document.querySelectorAll(".filter-btn");

/* Run filter code only if filter elements exist */
if (toggle && container) {

    toggle.addEventListener("click", () => {
        container.classList.toggle("show");
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            if (button.classList.contains("hide-btn")) {
                container.classList.remove("show");
                return;
            }

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.dataset.category;

            const cards = document.querySelectorAll(
                ".other-than-home-insert-div .card-other-than-home"
            );

            cards.forEach(card => {
                card.style.display =
                    category === "All" || card.dataset.category === category
                        ? "block"
                        : "none";
            });
        });
    });
}


/* ================= SEARCH SECTION ================= */

const searchInput = document.querySelector(".input-hero");
const searchIcon = document.querySelector(".search-icon-breakfast");
const topContainer = document.querySelector(".new-home-search-div-to-be-inserted-here");

function showDishOnTop() {

    const searchValue = searchInput.value.toLowerCase().trim();

    // Select ONLY original cards (not cloned ones)
    const originalCards = document.querySelectorAll(
        ".other-than-home-insert-div .card-other-than-home"
    );

    // Clear previous results
    topContainer.innerHTML = "";

    if (searchValue === "") {
        return;
    }

    let found = false;

    originalCards.forEach(card => {
        const title = card
            .querySelector(".card-title-other-than-home")
            .textContent
            .toLowerCase();

        if (title.includes(searchValue)) {
            const clonedCard = card.cloneNode(true);
            topContainer.appendChild(clonedCard);
            found = true;
        }
    });

    if (!found) {
        topContainer.innerHTML =
            "<h2 style='text-align:center;'>No Dish Found</h2>";
    }
}

/* Live search */
if (searchInput) {
    searchInput.addEventListener("input", showDishOnTop);
}

/* Click search icon */
if (searchIcon) {
    searchIcon.addEventListener("click", showDishOnTop);
}