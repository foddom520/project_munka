const darkModeToggle = document.querySelector('#dark-mode-toggle-checkbox');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
