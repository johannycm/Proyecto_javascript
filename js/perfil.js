document.addEventListener('DOMContentLoaded', function() {
const profileForm = document.getElementById('profileForm');
const email = getCookie('email');
const users = JSON.parse(localStorage.getItem('users')) || [];
const user = users.find(user => user.email === email);

if (user) {
  profileForm.nombre.value = user.nombre;
  profileForm.apellido.value = user.apellido;
  profileForm.email.value = user.email;
}

profileForm.addEventListener('submit', function(event) {
  event.preventDefault();
    if (user) {
      user.nombre = profileForm.nombre.value;
      user.apellido = profileForm.apellido.value;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Perfil actualizado con éxito');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {

  // Eliminar la cookie de sesión

document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

// Redirigir a la página de login

window.location.href = './../html/login.html';
  });
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
