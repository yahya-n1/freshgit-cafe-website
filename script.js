// MENU FILTER
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if(category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.classList.contains(category) ? 'block' : 'none';
        }
    });
}

// FORM VALIDATION
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill in all fields!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Thank you for your message!";
        feedback.style.color = "green";
        form.reset();
    }
});
