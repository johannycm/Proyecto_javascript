/**
* @function toggleDarkMode
* @description Maneja el evento de cambio de modo oscuro.
* @param {Event} event - El evento de cambio de modo oscuro.
*/
document.getElementById('darkModeToggle').addEventListener('click', function() {
document.body.classList.toggle('dark-mode');

// Guardar preferencia en el localStorage
if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
  }
});

// Cargar la preferencia de modo oscuro del localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
