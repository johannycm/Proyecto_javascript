/**
* @function loginForm
* @description Maneja el evento de envío del formulario de inicio de sesión.
* @param {Event} event - El evento de envío del formulario.
*/
document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();  // Previene la acción por defecto del formulario

const email = document.getElementById('email').value;  // Obtiene el valor del campo de email
const password = document.getElementById('password').value;  // Obtiene el valor del campo de contraseña

const users = JSON.parse(localStorage.getItem('users')) || [];  // Obtiene la lista de usuarios del localStorage

/**
* @function admin.
* @description Verifica si el usuario es un administrador.
* @param {string} email - El email del administrador.
* @param {string} password - La contraseña del administrador.
* @param {string} role - El rol del administrador.
*/

// Datos del administrador
const admin = {
    email: 'admin@email.com',
    password: 'Admin1234!',
    role: 'admin'
};

// Agregar al administrador si no existe en la lista de usuarios

if (!users.some(user => user.email === admin.email)) {
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));  // Guarda la lista actualizada de usuarios en el localStorage
}

// Encuentra al usuario correspondiente en la lista de usuarios
const user = users.find(user => user.email === email && user.password === password);

// Verifica si el usuario existe y las credenciales son correctas
if (!user) {
    alert('Usuario o contraseña incorrectos');
    return;
}

/**
* @function setCookie
* @description Establece una cookie con la información del usuario.
* @param {string} email - El email del usuario.
* @param {string} role - El rol del usuario.
*/
const now = new Date();
now.setTime(now.getTime() + 2 * 60 * 60 * 1000);  // Ajusta la hora actual para que expire en 2 horas
document.cookie = `email=${email};expires=${now.toUTCString()};path=/`;  // Establece la cookie

// Redirige al usuario según su rol
if (user.role === 'admin') {
    window.location.href = './../html/admin.html';  // Redirige a la página de administración
} else {
    window.location.href = 'home.html';  // Redirige a la página de inicio
}
});
