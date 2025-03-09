// Dark Mode and Light Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const lightModeToggle = document.getElementById('light-mode-toggle');
const body = document.body;

// Enable Dark Mode
darkModeToggle.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    body.classList.add('dark-mode'); // Add dark mode class to body
});

// Enable Light Mode
lightModeToggle.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    body.classList.remove('dark-mode'); // Remove dark mode class from body
});
