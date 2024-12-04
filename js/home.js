document.getElementById('profileButton').addEventListener('click', function() {
  window.location.href = './../html/perfil.html';
});

document.getElementById('logoutButton').addEventListener('click', function() {
  // Eliminar la cookie de sesión
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  // Redirigir a la página de login
  window.location.href = './../html/login.html';
});
