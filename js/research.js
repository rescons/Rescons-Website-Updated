document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated');

    function handleScroll() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight - 100) {
                element.classList.add('fadeIn');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
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


