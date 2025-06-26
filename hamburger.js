
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('detailsModal');
  const airbnbBtn = document.getElementById('airbnbLink');
  const bookingBtn = document.getElementById('bookingLink');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.show-modal').forEach(button => {
    button.addEventListener('click', function () {
      const airbnbUrl = this.dataset.airbnb;
      const bookingUrl = this.dataset.booking;
      airbnbBtn.href = airbnbUrl;
      bookingBtn.href = bookingUrl;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
