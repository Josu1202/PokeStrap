const navbarToggle = document.querySelector('[data-navbar-toggle]');
const navbarMenu = document.querySelector('[data-navbar-menu]');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-hidden');
  });
}