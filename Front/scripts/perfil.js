function carregarPerfil() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    fetch(`http://localhost:3000/usuarios/${userId}`)
        .then(response => response.json())
        .then(usuario => {
            document.getElementById('id').textContent = usuario.id;
            document.getElementById('nome').textContent = usuario.nome;
            document.getElementById('cpf').textContent = usuario.cpf;
            document.getElementById('email').textContent = usuario.email;
            document.getElementById('nascto').textContent = usuario.nascto;
            document.getElementById('endereco').textContent = usuario.endereco;
            document.getElementById('telefones').textContent = usuario.telefones;
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o perfil:', error);
        });
}
