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
  
    idElement.textContent = 'Id: ' + usuario.id;
    nomeElement.textContent = 'Nome: ' + usuario.nome;
    cpfElement.textContent = 'CPF: ' + usuario.cpf;
    emailElement.textContent = 'Email: ' + usuario.email;
    senhaElement.textContent = 'Senha: ' + '******';
    nasctoElement.textContent = 'Data de Nascimento: ' + formatarData(usuario.nascto);
    cepElement.textContent = 'CEP: ' + usuario.cep;
    numeroElement.textContent = 'Número: ' + usuario.numero;
    complementoElement.textContent = 'Complemento: ' + usuario.complemento;
    telefoneElement.textContent = 'Telefone:';
    
    for (const telefone of usuario.telefone) {
      const telefoneItem = document.createElement('p');
      telefoneItem.textContent = telefone;
      telefoneElement.appendChild(telefoneItem);
    }

    
    localStorage.removeItem('usuario');
  }
});

function formatarData(data) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(data).toLocaleDateString('pt-BR', options);
}


