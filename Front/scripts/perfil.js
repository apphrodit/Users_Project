document.addEventListener('DOMContentLoaded', function() {
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
    const editarForm = document.getElementById('editar-form');
  
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

    // Preencher campos de edição com os dados do usuário
    const nomeInput = document.getElementById('nome-input');
    const emailInput = document.getElementById('email-input');
    const senhaInput = document.getElementById('senha-input');
    const cepInput = document.getElementById('cep-input');
    const numeroInput = document.getElementById('numero-input');
    const complementoInput = document.getElementById('complemento-input');
    const telefoneInput = document.getElementById('telefone-input');

    nomeInput.value = usuario.nome;
    emailInput.value = usuario.email;
    senhaInput.value = usuario.senha;
    cepInput.value = usuario.cep;
    numeroInput.value = usuario.numero;
    complementoInput.value = usuario.complemento;
    telefoneInput.value = usuario.telefone.join(', ');

    // Adicionar evento de envio do formulário de edição
    editarForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Obter os novos valores do formulário
      const novoNome = nomeInput.value;
      const novoEmail = emailInput.value;
      const novaSenha = senhaInput.value;
      const novoCep = cepInput.value;
      const novoNumero = numeroInput.value;
      const novoComplemento = complementoInput.value;
      const novoTelefone = telefoneInput.value.split(',').map(item => item.trim());

      // Atualizar os dados na tela
      nomeElement.textContent = 'Nome: ' + novoNome;
      emailElement.textContent = 'Email: ' + novoEmail;
      senhaElement.textContent = 'Senha: ' + '******';
      cepElement.textContent = 'CEP: ' + novoCep;
      numeroElement.textContent = 'Número: ' + novoNumero;
      complementoElement.textContent = 'Complemento: ' + novoComplemento;
      telefoneElement.textContent = 'Telefone: ' + novoTelefone;

      // Atualizar os dados no localStorage
      usuario.nome = novoNome;
      usuario.email = novoEmail;
      usuario.senha = novaSenha;
      usuario.cep = novoCep;
      usuario.numero = novoNumero;
      usuario.complemento = novoComplemento;
      usuario.telefone = novoTelefone;
      localStorage.setItem('usuario', JSON.stringify(usuario));
    });

    localStorage.removeItem('usuario');
  }
});

function formatarData(data) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(data).toLocaleDateString('pt-BR', options);
}
