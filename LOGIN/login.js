document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
      alert('Usuario o contraseña incorrectos');
      return;
  }

  // Crear una cookie que vence en dos horas
  const now = new Date();
  now.setTime(now.getTime() + 2 * 60 * 60 * 1000); // 2 horas
  document.cookie = `email=${email};expires=${now.toUTCString()};path=/`;

  window.location.href = 'home.html';
});
