class Usuarios {
    constructor(i){
        this.id = i.id;
        this.nome = i.nome;
        this.cpf = i.cpf;
        this.email = i.email;
        this.senha = i.senha;
        this.nascto = i.nascto;
        this.cep = i.cep;
        this.numero = i.numero;
        this.complemento = i.complemento;
        this.telefone = Array.isArray(i.telefone) ? i.telefone.join(',') : (i.telefone || '');
    }
    read(){
        if(this.id == undefined)
            return `SELECT * FROM usuarios`
        else
            return `SELECT * FROM usuarios WHERE id = ${this.id}`
    }

    login(i){
        return `SELECT * FROM usuarios WHERE email = '${this.email}' AND senha = password('${this.senha}')`
    }

    update(id) {
        return `UPDATE usuarios SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = password('${this.senha}'), nascto = '${this.nascto}', cep = '${this.cep}', numero = '${this.numero}', complemento = '${this.complemento}', telefone = '${this.telefone}' WHERE id = ${this.id}`;
    }
    
}   

module.exports = Usuarios;
