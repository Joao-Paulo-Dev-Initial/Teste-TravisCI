const { criarUsuario, login, listarUsuario } = require("../services/userService");

describe("Sistema de usuários", () => {
    test("Deve criar um usuário válido", () => {
        const usuario = criarUsuario("João", "joao@gmail.com", "123456");

        expect(usuario.nome).toBe("João");
        expect(usuario.email).toBe("joao@gmail.com");
    });

    test("Não pode ter uma senha com menos de 6 caracteres", () => {
        expect(() => {

            criarUsuario("Maria", "maria@gmail.com", "123");

        }).toThrow("A senha deve ter no mínimo 6 caracteres");
    });

    test("Não pode ter email duplicado", () => {
        
        criarUsuario("Pedro", "pedro@gmail.com", "123456");

        expect(() => {

            criarUsuario("Pedroz", "pedro@gmail.com", "123456");

        }).toThrow("Email já cadastrado");
    });

    test("Deve realizar login com dados corretos", () => {

        criarUsuario("Ana", "ana@gmail.com", "abcdef");

        const resultado = login("ana@gmail.com", "abcdef");

        expect(resultado).toBe("Login realizado com sucesso");
  });

    test("Deve dar falha no login com senha errada", () => {

        criarUsuario("Carlos", "carlos@gmail.com", "abcdef");

        expect(() => {

            login("carlos@gmail.com", "123456");

        }).toThrow("Senha incorreta");
    });

    test("Deve listar usuários cadastrados", () => {

    const usuarios = listarUsuario();

    expect(usuarios.length).toBeGreaterThan(0);
  });
});