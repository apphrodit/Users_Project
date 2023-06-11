// Importe a biblioteca 'crypto-js' para utilizar o algoritmo de criptografia AES
const CryptoJS = require('crypto-js');

// ...

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
      console.log(data); // Adicionado console.log para exibir a resposta da requisição

      if (data.length > 0) {
        const usuario = data[0];

        // Criptografa o id usando AES
        const encryptedId = CryptoJS.AES.encrypt(usuario.id.toString(), 'chave-secreta').toString();

        // Armazena os dados do usuário no Local Storage
        localStorage.setItem('usuario', JSON.stringify(usuario));

        window.location.href = `perfil2.html?id=${encryptedId}`;
      } else {
        // Email ou senha incorretos, exibir mensagem de erro
        alert('Email ou senha incorretos');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao fazer login:', error);
    });
}
