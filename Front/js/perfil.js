//Abrir o mockup local com fetch
fetch('./mockup.json')
    .then(resposta => resposta.json())
    .then(dados => {
        //Preencher os campos do formulário com os dados do mockup
        const perfil = document.getElementById('perfil');
        perfil.id.value = dados.id;
        perfil.nome.value = dados.nome;
        perfil.cpf.value = dados.cpf;
        perfil.email.value = dados.email;
        perfil.nascimento.value = dados.nascimento;
        perfil.cep.value = dados.endereco.cep;
        perfil.numero.value = dados.endereco.numero;
        perfil.complemento.value = dados.endereco.complemento;
        perfil.telefones.value = dados.telefones;
    })
    .catch(erro => {
        console.log(erro);
    });