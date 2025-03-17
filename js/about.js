document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('[data-animate="fade-in"]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
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


