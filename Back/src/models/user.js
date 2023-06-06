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
        this.telefone = i.telefone;
    };

    read(){
        if(this.id == undefined)
            return `SELECT * FROM usuarios`
        else
            return `SELECT * FROM usuarios WHERE id = ${this.id}`
    }

    update(id){
        return `UPDATE usuarios SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = '${this.senha}', nascto = '${this.nascto}', cep = '${this.cep}', numero = '${this.numero}, complemento = '${this.complemento}', telefone = '${this.telefone}' WHERE id = ${id}`
    }
}   