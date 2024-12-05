/**
*@function DOMContentLoaded
*@description Función que se ejecuta cuando el DOM ya ha sido cargado.
*@param {Event} event - El evento de carga del DOM.
*/

document.addEventListener('DOMContentLoaded', function() {

const userTable = document.getElementById('userTable');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const homeButton = document.getElementById('homeButton');
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = null;

// Administrador predefinido

const admin = {
    email: 'admin@example.com',
    password: 'Admin1234!',
    role: 'admin'
};

// Agregar al administrador si no existe en la lista de usuarios

if (!users.some(user => user.email === admin.email)) {
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
}

/**
* @function displayUsers
* @description Muestra la lista de usuarios en la tabla.
* @param {Event} event - El evento de carga del DOM.
*/
function displayUsers() {
    userTable.innerHTML = '';
    users.forEach(user => {
    // Solo mostrar usuarios que no sean el administrador
    if (user.email !== admin.email) {
    const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${user.nombre}</td>
            <td class="border px-4 py-2">${user.apellido}</td>
            <td class="border px-4 py-2">${user.email}</td>
            <td class="border px-4 py-2">
                <button class="editUser bg-blue-500 text-white px-2 py-1 rounded"
                data-email="${user.email}">Editar</button>
                <button class="deleteUser bg-red-500 text-white px-2 py-1 rounded ml-2"
                data-email="${user.email}">Eliminar</button>
            </td>
        `;
    userTable.appendChild(row);
        }
    });
}

/**
* @function openEditModal
* @description Abre el modal de edición para editar un usuario.
* @param {string} email - El email del usuario a editar.
*/
function openEditModal(email) {
    const user = users.find(user => user.email === email);
    if (user) {
        currentUser = user;
        editForm.editNombre.value = user.nombre;
        editForm.editApellido.value = user.apellido;
        editForm.editEmail.value = user.email;
        editModal.classList.remove('hidden');
    }
}

/**
* @function closeEditModal
* @description Cierra el modal de edición.
* @param {Event} event - El evento de envío del formulario.
*/
function closeEditModal() {
    editModal.classList.add('hidden');
    currentUser = null;
}

/**
* @function editForm
* @description Maneja el evento de envío del formulario de edición.
* @param {Event} event - El evento de envío del formulario.
*/

editForm.addEventListener('submit', function(event) {
event.preventDefault();

// Actualizar los datos del usuario
currentUser.nombre = editForm.editNombre.value;
currentUser.apellido = editForm.editApellido.value;
currentUser.email = editForm.editEmail.value;

// Actualizar el localStorage
const updatedUsers = users.map(user => user.email === currentUser.email ? currentUser : user);
localStorage.setItem('users', JSON.stringify(updatedUsers));

displayUsers();
closeEditModal();
});

/**
* @function cancelEdit
* @description Cierra el modal de edición sin guardar los cambios.
* @param {Event} event - El evento de envío del formulario.
*/
document.getElementById('cancelEdit').addEventListener('click', function() {
    closeEditModal();
});

/**
* @function userTable
* @description Maneja los eventos de clic en la tabla de usuarios.
* @param {Event} event - El evento de clic.
*/

userTable.addEventListener('click', function(event) {
    if (event.target.classList.contains('editUser')) {
        const email = event.target.dataset.email;
        openEditModal(email);
    } else if (event.target.classList.contains('deleteUser')) {
        const email = event.target.dataset.email;
        if (confirm('¿Seguro que quieres eliminar este usuario?')) {
            users = users.filter(user => user.email !== email);
            localStorage.setItem('users', JSON.stringify(users));
            displayUsers();
        }
    }
});

/**
* @function homeButton
* @description Maneja el evento de clic en el botón de inicio.
* @param {Event} event - El evento de clic.
*/
homeButton.addEventListener('click', function() {
window.location.href = './../html/home.html';
});

// Inicializar la vista de usuarios
displayUsers();
});
