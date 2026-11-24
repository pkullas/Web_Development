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
