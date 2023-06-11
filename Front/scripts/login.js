// Função para realizar o login
function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Fazer a requisição para o servidor
  fetch('http://localhost:3000/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, senha })
  })
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        // Login bem-sucedido, redirecionar para o perfil do usuário
        const usuario = data[0];
        window.location.href = `perfil.html?id=${usuario.id}`;
      } else {
        // Email ou senha incorretos, exibir mensagem de erro
        alert('Email ou senha incorretos');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao fazer login:', error);
    });
}
