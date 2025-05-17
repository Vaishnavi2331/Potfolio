const ham = document.querySelector('.hamburger'); // Fixed typo: 'humburger' to 'hamburger'
const navL = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle menu
function toggleMenu() {
    ham.classList.toggle('active');
    navL.classList.toggle('active');
}

// Close menu
function closeMenu() {
    ham.classList.remove('active');
    navL.classList.remove('active');
}

// Event listener for hamburger menu
ham.addEventListener('click', toggleMenu);

// Event listeners for each link to close the menu when clicked
links.forEach(link => {
    link.addEventListener('click', closeMenu);
});
