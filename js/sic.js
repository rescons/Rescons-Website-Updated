document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add('fade-in');
      }, index * 200);
    });
  
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImage = document.getElementById('largeImage');
  
    // Set the default image to the first thumbnail
    largeImage.src = thumbnails[0].src;
    largeImage.alt = thumbnails[0].alt;
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        largeImage.src = this.src;
        largeImage.alt = this.alt;
      });
    });
  });
  
  function downloadPDF() {
    const link = document.createElement('a');
    link.href = './assets/w3logo.doc' // Replace with the path to your PDF file
    link.download = 'w3logo.doc'; // Replace with the desired file name
    link.click();
  }

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
  