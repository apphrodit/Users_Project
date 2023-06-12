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
    telefoneElement.textContent = 'Telefone: ' + usuario.telefone;
    
   
    const form = document.getElementById('editar-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
    
      const nomeInput = document.getElementById('nome-input').value;
      const emailInput = document.getElementById('email-input').value;
      const senhaInput = document.getElementById('senha-input').value;
      const cepInput = document.getElementById('cep-input').value;
      const numeroInput = document.getElementById('numero-input').value;
      const complementoInput = document.getElementById('complemento-input').value;
      const telefoneInput = document.getElementById('telefone-input').value;
      
      nomeElement.textContent = 'Nome: ' + nomeInput;
      emailElement.textContent = 'Email: ' + emailInput;
      senhaElement.textContent = 'Senha: ' + '******';
      cepElement.textContent = 'CEP: ' + cepInput;
      numeroElement.textContent = 'Número: ' + numeroInput;
      complementoElement.textContent = 'Complemento: ' + complementoInput;
      telefoneElement.textContent = 'Telefone: ' + telefoneInput;
      
      
      usuario.nome = nomeInput;
      usuario.email = emailInput;
      usuario.senha = senhaInput;
      usuario.cep = cepInput;
      usuario.numero = numeroInput;
      usuario.complemento = complementoInput;
      usuario.telefone = telefoneInput.split(',');
      
      
      localStorage.setItem('usuario', JSON.stringify(usuario));
      
      
      form.reset();
    });
    
    
    localStorage.removeItem('usuario');
  }
});

function formatarData(data) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(data).toLocaleDateString('pt-BR', options);
}
