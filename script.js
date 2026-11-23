
// Mitali Jinadra - Portfolio JavaScript

// 1. Reveal sections when scrolling
const sections = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});

// 2. Update footer year automatically
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Mitali Jinadra. All Rights Reserved.`;
}

// 3. Navigation link click effect
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Navigating to: " + link.textContent);
    });
});

// 4. Contact button message
const contactButton = document.querySelector(".contact-section .primary-btn");

if (contactButton) {
    contactButton.addEventListener("click", () => {
        console.log("Thanks for visiting my portfolio!");
    });
}

console.log("Mitali's Portfolio Loaded Successfully!");
