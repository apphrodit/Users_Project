function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('http://localhost:3000/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, senha })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.length > 0) {
        const usuario = data[0];
        localStorage.setItem('usuario', JSON.stringify(usuario));

        window.location.href = `perfil2.html`;
      } else {
        alert('Email ou senha incorretos');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao fazer login:', error);
    });
}
