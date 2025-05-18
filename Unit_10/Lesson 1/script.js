// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

// Read More button functionality
const readMoreBtn = document.getElementById('readMoreBtn');
const hiddenContent = document.getElementById('hiddenContent');

readMoreBtn.addEventListener('click', () => {
    if (hiddenContent.style.display === 'block') {
        hiddenContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    } else {
        hiddenContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    }
});

// Image modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all gallery images and add click event
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    });
});

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Skills button functionality
const skillsBtn = document.getElementById('skillsBtn');
const demoText = document.getElementById('demoText');

skillsBtn.addEventListener('click', function() {
    if (demoText.textContent === 'Click below to see my current focus:') {
        demoText.textContent = 'Currently focused on React and Node.js development!';
    } else {
        demoText.textContent = 'Click below to see my current focus:';
    }
});