document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('menu-visible');
    menu.classList.toggle('menu-hidden');
});

// Close menu button
document.getElementById('close-menu').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('menu-hidden');
    menu.classList.toggle('menu-visible');
});