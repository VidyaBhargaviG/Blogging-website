// JavaScript for Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Hover Animation (optional)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.2s ease-in-out';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Confirmation Popup for Explore Button
const exploreBtn = document.querySelector('.content .btn');
exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let confirmation = confirm("Are you ready to explore more content?");
    if (confirmation) {
        window.location.href = "menu.html"; // Redirect to the explore page
    }
});

// Social Links Open in New Tab
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.setAttribute('target', '_blank');
});

// Toggle Menu (if you want to add a responsive menu for mobile)
const nav = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Smooth Scroll to 'Recent Posts'
document.querySelector('.ask a').addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Hover Effects for Cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Confirmation Popup for Log Out
const logOutButton = document.querySelector('button[type="logout"]');
logOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        window.location.href = "logout.html"; // Replace with your actual logout link
    }
});

// Dynamic Redirects for Blog View Buttons
const photographyBtn = document.querySelector('.card-btn[href="blog.html"]');
photographyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "photography_blog.html"; // Replace with the actual link for Photography blog
});

const artsCraftsBtn = document.querySelector('.card-btn[href="#"]'); // Update this for arts & crafts
artsCraftsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "arts_crafts_blog.html"; // Replace with the actual link for Arts & Crafts blog
});

const foodBtn = document.querySelector('.card-btn[href="#"]'); // Update this for food blog
foodBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "food_blog.html"; // Replace with the actual link for Food blog
});

