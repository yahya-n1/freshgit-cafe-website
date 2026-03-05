// Order Now button
function orderNow() {
    alert("Thank you for your order! Visit us soon.");
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
            } else {
                alert("Thank you for contacting FreshBite Café!");
                form.reset();
            }
        });
    }
});
