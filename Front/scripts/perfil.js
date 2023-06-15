// Arquivo: perfil.js

function Atualizar() {
  // Obtenção dos valores dos campos de entrada
  const nomeInput = document.getElementById('nome-input').value;
  const emailInput = document.getElementById('email-input').value;
  const senhaInput = document.getElementById('senha-input').value;
  const nasctoInput = document.getElementById('nascto-input').value;
  const cepInput = document.getElementById('cep-input').value;
  const numeroInput = document.getElementById('numero-input').value;
  const complementoInput = document.getElementById('complemento-input').value;
  const telefoneInput = document.getElementById('telefone-input').value;

  // Obtenção do usuário atual do armazenamento local
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (!usuario) {
    alert('Não há informações de usuário disponíveis');
    return;
  }

  // Criação do objeto de dados atualizados
  const dadosAtualizados = {
    id: usuario.id,
    nome: nomeInput,
    email: emailInput,
    senha: senhaInput,
    nascto: nasctoInput,
    cep: cepInput,
    numero: numeroInput,
    complemento: complementoInput,
    telefone: telefoneInput.split(',')
  };

  // Requisição de atualização para o servidor
  fetch(`http://localhost:3000/usuarios/alterar/${usuario.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocorreu um erro ao atualizar os dados do usuário');
      }
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        throw new Error('A resposta do servidor não contém um JSON válido');
      }
    })
    .then(data => {
      console.log(data); // Adicione esta linha para verificar a resposta do servidor no console
      if (Array.isArray(data) && data.length > 0) {
        const usuarioAtualizado = data[0];
        localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado));

        // Atualização dos elementos HTML com os dados atualizados
        const nomeElement = document.getElementById('nome');
        const emailElement = document.getElementById('email');
        const senhaElement = document.getElementById('senha');
        const nasctoElement = document.getElementById('nascto');
        const cepElement = document.getElementById('cep');
        const numeroElement = document.getElementById('numero');
        const complementoElement = document.getElementById('complemento');
        const telefoneElement = document.getElementById('telefone');

        nomeElement.textContent = 'Nome: ' + usuarioAtualizado.nome;
        emailElement.textContent = 'Email: ' + usuarioAtualizado.email;
        senhaElement.textContent = 'Senha: ' + '******';
        nasctoElement.textContent = 'Data de Nascimento: ' + formatarData(usuario.nascto);
        cepElement.textContent = 'CEP: ' + usuarioAtualizado.cep;
        numeroElement.textContent = 'Número: ' + usuarioAtualizado.numero;
        complementoElement.textContent = 'Complemento: ' + usuarioAtualizado.complemento;
        telefoneElement.textContent = 'Telefone: ' + usuarioAtualizado.telefone;

        alert('Dados atualizados com sucesso!');
      } else {
        throw new Error('A resposta do servidor não contém um objeto JSON válido');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao atualizar os dados do usuário:', error.message);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  // Obtém o usuário atual do armazenamento local
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario) {
    // Atualiza os elementos HTML com os dados do usuário atual
    const idElement = document.getElementById('id');
    const nomeElement = document.getElementById('nome');
    const cpfElement = document.getElementById('cpf');
    const emailElement = document.getElementById('email');
    const senhaElement = document.getElementById('senha');
    const nasctoElement = document.getElementById('nascto');
    const cepElement = document.getElementById('cep');
    const numeroElement = document.getElementById('numero');
    const complementoElement = document.getElementById('complemento');
    const telefoneElement = document.getElementById('telefone');

    idElement.textContent = 'Id: ' + usuario.id;
    nomeElement.textContent = 'Nome: ' + usuario.nome;
    cpfElement.textContent = 'CPF: ' + usuario.cpf;
    emailElement.textContent = 'Email: ' + usuario.email;
    senhaElement.textContent = 'Senha: ' + '******';
    nasctoElement.textContent = 'Data de Nascimento: ' + formatarData(usuario.nascto);
    cepElement.textContent = 'CEP: ' + usuario.cep;
    numeroElement.textContent = 'Número: ' + usuario.numero;
    complementoElement.textContent = 'Complemento: ' + usuario.complemento;
    telefoneElement.textContent = 'Telefone: ' + usuario.telefone;
  }

  function formatarData(data) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(data).toLocaleDateString('pt-BR', options);
  }
});
