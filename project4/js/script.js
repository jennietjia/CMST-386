document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const checkboxes = document.querySelectorAll('input[name="project-type"]');
        const radioButtons = document.querySelectorAll('input[name="referral"]');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("Please fill out all required fields: Name, Email, and Message.");
            event.preventDefault();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        const isCheckboxChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
        if (!isCheckboxChecked) {
            alert("Please select at least one project type.");
            event.preventDefault();
            return;
        }
        
        const isRadioSelected = Array.from(radioButtons).some((radio) => radio.checked);
        if (!isRadioSelected) {
            alert("Please select how you heard about me.");
            event.preventDefault();
            return;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('date-time').textContent = new Date().toLocaleString();
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        header.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    if (!slideContainer || slides.length === 0) {
        console.error("Carousel elements not found.");
        return;
    }

    let currentIndex = 0;

    const updateCarousel = () => {
        const slideWidth = slideContainer.clientWidth;
        slideContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            slideContainer.style.transition = 'transform 0.5s ease-in-out';
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slideContainer.style.transition = 'transform 0.5s ease-in-out';
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
