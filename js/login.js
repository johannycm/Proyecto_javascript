document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const users = JSON.parse(localStorage.getItem('users')) || [];

// Administrador
const admin = {
    email: 'admin@email.com',
    password: 'Admin1234!',
    role: 'admin'
};

// Agregar al administrador
if (!users.some(user => user.email === admin.email)) {
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
}

// Diferenciar al usuario o al administrador
const user = users.find(user => user.email === email && user.password === password);

if (!user) {
    alert('Usuario o contraseña incorrectos');
    return;
}

// Crear una cookie que vence en dos horas
const now = new Date();
now.setTime(now.getTime() + 2 * 60 * 60 * 1000); // 2 horas
document.cookie = `email=${email};expires=${now.toUTCString()};path=/`;

// Redirigir según el rol del usuario
if (user.role === 'admin') {
    window.location.href = './../html/admin.html'; // URL del CRUD del administrador
} else {
    window.location.href = 'home.html'; // URL de la página de inicio
}
});


