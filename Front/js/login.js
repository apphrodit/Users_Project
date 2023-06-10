function md5(s) {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = s.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}
const acesso = document.getElementById('acesso');
acesso.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const email = acesso.email.value;
    const senha = acesso.senha.value;
    const erro = document.getElementById('erro');
    //verifica se o email e a senha estão preenchidos
    if (email && senha) {
        //converte a senha em md5
        const senhaMd5 = md5(senha);
        //faz a requisição para o servidor
        fetch('./mockup.json')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados);
                //verifica se o usuário e a senha estão corretas
                if (dados.email === email && dados.senha === senhaMd5.toString()) {
                    //redireciona para a página de perfil
                    window.location.href = `perfil.html?id=${dados.id}`;
                } else {
                    //exibe a mensagem de erro
                    erro.textContent = 'Usuário não encontrado';
                }
            })
            .catch(erro => {
                //exibe a mensagem de erro
                erro.textContent = 'Erro ao acessar o servidor';
            });
    } else {
        //exibe a mensagem de erro
        erro.textContent = 'Preencha todos os campos';
    }
});