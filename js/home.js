/**
* Redirige al usuario a la página de perfil.
* @function profileButton
* @description Redirige al usuario a la página de perfil.
*/
document.getElementById('profileButton').addEventListener('click', function() {
  window.location.href = './../html/perfil.html';  // Redirige a la página de perfil del usuario
});

/**
* Elimina la cookie de sesión y redirige al usuario a la página de inicio de sesión.
* @function logoutButton
* @description Elimina la cookie de sesión y redirige al usuario a la página de inicio de sesión.
*/
document.getElementById('logoutButton').addEventListener('click', function() {

// Eliminar la cookie de sesión estableciendo su fecha de expiración en el pasado para que el navegador lo vea como caducado
document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

// Redirigir a la página de login
window.location.href = './../html/login.html';  // Redirige a la página de inicio de sesión
});

