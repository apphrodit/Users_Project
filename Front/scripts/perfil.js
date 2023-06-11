function carregarPerfil() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
  
    // Recupera os dados do usuário do Local Storage
    const usuarioString = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioString);
  
    if (usuario && usuario.id === userId) {
      const perfilContainer = document.getElementById('perfil-container');
      perfilContainer.innerHTML = `
        <p>ID: ${usuario.id}</p>
        <p>Nome: ${usuario.nome}</p>
        <p>CPF: ${usuario.cpf}</p>
        <p>Email: ${usuario.email}</p>
        <p>Data de Nascimento: ${usuario.nascto}</p>
        <p>Endereço: ${usuario.endereco}</p>
        <p>Telefones: ${usuario.telefones}</p>
      `;
    } else {
      // Usuário não autenticado ou dados inválidos
      alert('Usuário não autenticado');
      window.location.href = 'login.html'; // Redireciona de volta para a página de login
    }
  }
  