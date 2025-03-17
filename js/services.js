document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.service-card');
    const cardWidth = cards[0].offsetWidth + 40; // Card width + margin
    const cardsPerView = 2;
    let currentIndex = 0;

    document.querySelector('.right-arrow').addEventListener('click', function() {
        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    document.querySelector('.left-arrow').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});

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