function Atualizar() {
  const nomeInput = document.getElementById('nome-input').value;
  const emailInput = document.getElementById('email-input').value;
  const senhaInput = document.getElementById('senha-input').value;
  const nasctoInput = document.getElementById('nascto-input').value;
  const cepInput = document.getElementById('cep-input').value;
  const numeroInput = document.getElementById('numero-input').value;
  const complementoInput = document.getElementById('complemento-input').value;
  const telefoneInput = document.getElementById('telefone-input').value;

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (!usuario) {
    alert('Não há informações de usuário disponíveis');
    return;
  }

  const dadosAtualizados = {
    id: usuario.id,
    nome: nomeInput,
    // cpf: usuario.cpf, // mantendo o CPF original
    email: emailInput,
    senha: senhaInput,
    nascto: nasctoInput, // mantendo a data de nascimento original
    cep: cepInput,
    numero: numeroInput,
    complemento: complementoInput,
    telefone: telefoneInput.split(',')
  };

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
      return response.json();
    })
    .then(data => {
      console.log(data); // Adicione esta linha para verificar a resposta do servidor no console
      if (data) {
        const usuarioAtualizado = data[0];
        localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado));

        // Atualizar os elementos HTML com os dados atualizados
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
        alert('Ocorreu um erro ao atualizar os dados do usuário');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao atualizar os dados do usuário:', error.message);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario) {
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
