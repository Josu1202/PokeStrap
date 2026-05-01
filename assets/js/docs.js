const navbarToggle = document.querySelector('[data-navbar-toggle]');
const navbarMenu = document.querySelector('[data-navbar-menu]');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-hidden');
  });
}

const downloadToggle = document.querySelector('[data-download-toggle]');
const downloadPanel = document.querySelector('[data-download-panel]');

if (downloadToggle && downloadPanel) {
  downloadToggle.addEventListener('click', () => {
    downloadPanel.hidden = !downloadPanel.hidden;

    downloadToggle.textContent = downloadPanel.hidden
      ? 'Mostrar opciones de descarga'
      : 'Ocultar opciones de descarga';
  });
}

const copyButtons = document.querySelectorAll('[data-copy-link]');

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const textToCopy = button.getAttribute('data-copy-text');

    try {
      await navigator.clipboard.writeText(textToCopy);

      const originalText = button.textContent;
      button.textContent = 'Copiado';

      setTimeout(() => {
        button.textContent = originalText;
      }, 1500);
    } catch (error) {
      button.textContent = 'Error';
    }
  });
});