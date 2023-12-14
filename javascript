
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
$(document).ready(function() {
  $('.search-button').on('click', function() {
    var searchTerm = $('.search-bar').val();
   
    console.log('Searched for: ' + searchTerm);
   
    //   }
    // });
  });
});