
function carregarPerfil() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    fetch(`http://localhost:3000/usuarios/${userId}`)
        .then(response => response.json())
        .then(usuario => {
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
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o perfil:', error);
        });
}
