const User = require("../models/userModel");

const usuarios = [];

function criarUsuario(nome, email, senha) {
    if(!nome || !email){
        throw new Error("Nome e email são campos obrigatórios");
    }

    if(senha.length < 6) {
        throw new Error("A senha deve ter no mínimo 6 caracteres");
    }

    const emailExistente = usuarios.find(u => u.email === email);

    if(emailExistente) {
        throw new Error("Email já cadastrado");
    }

    const usuario = new User(nome, email, senha);

    usuarios.push(usuario);

    return usuario;
}

function login(email, senha) {
    const usuario = usuarios.find(u => u.email === email);

    if(!usuario) {
        throw new Error("Usuário não encontrado");
    }

    if(usuario.senha !== senha) {
        throw new Error("Senha incorreta");
    }

    return "Login realizado com sucesso";
}

function listarUsuario() {
    return usuarios;
}

module.exports = { criarUsuario, login, listarUsuario };