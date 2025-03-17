document.addEventListener('DOMContentLoaded', () => {
    // Additional JavaScript for animations or interactivity can go here
    // For example, you might want to add scroll animations or other effects

    // Example: Fade-in effect on scroll
    const sections = document.querySelectorAll('section');
    
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
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
