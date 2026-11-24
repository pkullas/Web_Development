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

const bookingForm = document.querySelector("#book-ticket form");
const bookingSummary = document.querySelector("#booking-summary");

if (bookingForm && bookingSummary) {
    const matchSelect = document.getElementById("match");
    const standSelect = document.getElementById("stand");
    const quantityInput = document.getElementById("quantity");
    const summaryMatch = bookingSummary.querySelector("#summary-match");
    const summaryStand = bookingSummary.querySelector("#summary-stand");
    const summaryPrice = bookingSummary.querySelector("#summary-price");
    const summaryQuantity = bookingSummary.querySelector("#summary-quantity");
    const summaryTotal = bookingSummary.querySelector("#summary-total");
    const ticketPrices = {
        general: 1500,
        premium: 3500,
        vip: 7500,
    };

    function updateBookingSummary() {
        const matchOption = matchSelect.selectedOptions[0];
        const standOption = standSelect.selectedOptions[0];
        const price = ticketPrices[standSelect.value] || 0;
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
}
