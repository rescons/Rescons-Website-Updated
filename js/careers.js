let currentIndex = 0;
const slides = document.querySelectorAll('.card');
const totalSlides = slides.length;

function moveToNextSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % totalSlides;
}

setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            const rect = dropdownContent.getBoundingClientRect();

            if (rect.right > window.innerWidth) {
                dropdownContent.style.left = 'auto';
                dropdownContent.style.right = '0';
            } else {
                dropdownContent.style.left = '';
                dropdownContent.style.right = '';
            }
        });
    });
});