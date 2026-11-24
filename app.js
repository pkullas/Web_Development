let toastTimeout;

function showToast(message) {
    let toast = document.querySelector(".toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        document.body.append(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 3000);
}

const menuToggle = document.querySelector(".menu-toggle");
const headerInner = menuToggle?.closest(".header-inner");
const mainNavigation = document.getElementById("main-navigation");

if (menuToggle && headerInner && mainNavigation) {
    headerInner.classList.add("menu-ready");

    menuToggle.addEventListener("click", () => {
        const isOpen = headerInner.classList.toggle("nav-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    mainNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            headerInner.classList.remove("nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

const teamFilter = document.getElementById("team-filter");
const matchList = document.getElementById("match-list");

if (teamFilter && matchList) {
    const matchCards = matchList.querySelectorAll(".match-card");

    teamFilter.addEventListener("change", () => {
        matchCards.forEach((card) => {
            const teams = card.dataset.teams.split(/\s+/);
            card.hidden = teamFilter.value !== "all" && !teams.includes(teamFilter.value);
        });
    });

    matchList.parentElement.querySelectorAll(".view-switch [data-view]").forEach((button) => {
        button.addEventListener("click", () => {
            matchList.dataset.view = button.dataset.view;
            matchList.parentElement.querySelectorAll(".view-switch [data-view]").forEach((viewButton) => {
                const isActive = viewButton === button;
                viewButton.classList.toggle("is-active", isActive);
                viewButton.setAttribute("aria-pressed", String(isActive));
            });
        });
    });
}

document.querySelectorAll('a[href="#book-ticket"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const bookingForm = document.querySelector("#book-ticket");

        if (!bookingForm) {
            return;
        }

        event.preventDefault();
        bookingForm.scrollIntoView({ behavior: "smooth" });
        showToast("Booking form opened. Select your match to continue.");
    });
});

document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        showToast("Booking successful! Your tickets have been booked.");
    });
});

document.querySelectorAll("form").forEach((form) => {
    const bookingSummary = form.closest("section")?.querySelector("#booking-summary");

    if (!bookingSummary) {
        return;
    }

    const matchSelect = form.querySelector("#match");
    const standSelect = form.querySelector("#stand");
    const quantityInput = form.querySelector("#quantity");
    const summaryMatch = bookingSummary.querySelector("#summary-match");
    const summaryStand = bookingSummary.querySelector("#summary-stand");
    const summaryPrice = bookingSummary.querySelector("#summary-price");
    const summaryQuantity = bookingSummary.querySelector("#summary-quantity");
    const summaryTotal = bookingSummary.querySelector("#summary-total");

    function updateBookingSummary() {
        const matchOption = matchSelect.selectedOptions[0];
        const standOption = standSelect.selectedOptions[0];
        const price = Number(standOption.dataset.price) || 0;
        const quantity = Number(quantityInput.value) || 0;
        const validQuantity = Number.isInteger(quantity) && quantity >= 1 && quantity <= 10;

        summaryMatch.textContent = matchSelect.value ? matchOption.textContent : "Not selected";
        summaryStand.textContent = standSelect.value ? standOption.textContent.split(" - ")[0] : "Not selected";
        summaryPrice.textContent = `Rs. ${price.toLocaleString("en-IN")}`;
        summaryQuantity.textContent = quantityInput.value || "0";
        summaryTotal.textContent = `Rs. ${(validQuantity ? price * quantity : 0).toLocaleString("en-IN")}`;
        showToast("Booking summary updated.");
    }

    matchSelect.addEventListener("change", updateBookingSummary);
    standSelect.addEventListener("change", updateBookingSummary);
    quantityInput.addEventListener("input", updateBookingSummary);
});
