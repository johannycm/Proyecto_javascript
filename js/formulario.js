/**
* @function validarFormulario
* @description Valida el formulario de registro
* @param {Event} event - El evento de envío del formulario.
*/
document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
event.preventDefault(); // Evita el envío del formulario por defecto

// Inicialización
let valid = true;

// Obtener valores del formulario
let nombre = document.getElementById('nombre').value.trim();
let apellido = document.getElementById('apellido').value.trim();
let email = document.getElementById('email').value.trim();
let password = document.getElementById('password').value.trim();
let confirmPassword = document.getElementById('confirm-password').value;

if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    document.getElementById('nombreError').classList.remove('hidden');
    valid = false;
} else {
    document.getElementById('nombreError').classList.add('hidden');
}

// Apellido

if (!/^[a-zA-Z\s]+$/.test(apellido)) {
    document.getElementById('apellidoError').classList.remove('hidden');
    valid = false;
} else {
    document.getElementById('apellidoError').classList.add('hidden');
}

// Correo electrónico

if (!/^[^\s@]+\@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').classList.remove('hidden');
    valid = false;
} else {
    document.getElementById('emailError').classList.add('hidden');
}

// Contraseña

if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!_\-.,])[A-Za-z\d$!_\-.,]{8,}$/.test(password)) {
    document.getElementById('passwordError').classList.remove('hidden');
    valid = false;
} else {
    document.getElementById('passwordError').classList.add('hidden');
}

// Confirmación de contraseña

if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').classList.remove('hidden');
    valid = false;
} else {
    document.getElementById('confirmPasswordError').classList.add('hidden');
}

/**
* @function registrarUsuario
* @description Registra un nuevo usuario en el sistema.
* @param {string} nombre - El nombre del usuario.
* @param {string} apellido - El apellido del usuario.
* @param {string} email - El email del usuario.
* @param {string} password - La contraseña del usuario.

*/


if (valid) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

if (userExists) {
    alert('El email ya está registrado');
    } else {
        users.push({ nombre, apellido, email, password });
        localStorage.setItem('users', JSON.stringify(users));
    alert('Registro completado');
        window.location.href = './../html/login.html';
    }
}
});
