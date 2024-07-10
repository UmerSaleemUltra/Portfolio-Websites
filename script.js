document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');
  const menuLinks = document.querySelectorAll('#mobile-menu a');

  hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('-translate-x-full');
  });

  closeMenu.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.add('-translate-x-full');
  });

  // Close the mobile menu when clicking a link
  menuLinks.forEach(link => {
      link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.add('-translate-x-full');
      });
  });
});
