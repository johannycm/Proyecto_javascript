/**
* @funtion profile
* @description Funcion que se ejecuta cuando el DOM ya ha sido cargado.
* @param {Event} event - El evento de carga del DOM.
*/
document.addEventListener('DOMContentLoaded', function() {
  const profileForm = document.getElementById('profileForm');
  const email = getCookie('email');  // Obtiene la cookie 'email'
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email);

// Si se encuentra un usuario, llena el formulario con sus datos
if (user) {
    profileForm.nombre.value = user.nombre;
    profileForm.apellido.value = user.apellido;
    profileForm.email.value = user.email;
  }

/**
* @function editForm
* @description Maneja el evento de envío del formulario de edición.
* @param {Event} event - El evento de envío del formulario.
*/

profileForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Previene la acción por defecto del formulario
    if (user) {
      user.nombre = profileForm.nombre.value;
      user.apellido = profileForm.apellido.value;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Perfil actualizado con éxito');
  }
});

/**
* @funrtion logout
* @description Maneja el evento de envío del formulario de edición.
* @param {Event} event - El evento de envío del formulario.
*/

document.getElementById('logoutButton').addEventListener('click', function() {
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = './../html/login.html';
  });
});

/**
* @function getCookie
* @description Obtiene el valor de una cookie.
* @param {string} name - El nombre de la cookie.
* @returns {string} El valor de la cookie.
*/
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
