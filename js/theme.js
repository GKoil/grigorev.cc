document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //mobile-menu
  document
    .querySelector('.mobile-btn')
    .addEventListener('click', toggleMobileMenu);
  document
    .querySelector('.close-mob-menu')
    .addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('.mobile-menu ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function () {
      document.querySelector('.mob-menu-wrapper').classList.remove('active');
    });
  });

  function toggleMobileMenu() {
    document.querySelector('.mob-menu-wrapper').classList.toggle('active');
  }

  //scroll to anchor
  document
    .querySelectorAll(
      '.main-menu ul li a[href*="#"], .mobile-menu ul li a[href*="#"]'
    )
    .forEach((anchor) => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        var margin = document.querySelector('.header').offsetHeight;
        var target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - margin,
          behavior: 'smooth',
        });
      });
    });
});
