// JavaScript for Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked (optional)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// JavaScript for the slideshow (from earlier)
let currentIndex = 0;
const images = document.querySelectorAll('.hero img');
const texts = [
    "Welcome to RitTech",
    "Innovative Solutions for Your Business",
    "Transforming Ideas into Reality",
    "Empowering Your Digital Journey",
    "Your Partner in Technology"
];

let slideshowInterval;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    images[currentIndex].classList.add('active');

    // Update the text for the current image
    document.querySelector('.hero-overlay h1').textContent = texts[currentIndex];
}

function startSlideshow() {
    slideshowInterval = setInterval(showNextImage, 5000);
}

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

// Start the slideshow
startSlideshow();

// Pause on hover
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', pauseSlideshow);
heroSection.addEventListener('mouseleave', startSlideshow);