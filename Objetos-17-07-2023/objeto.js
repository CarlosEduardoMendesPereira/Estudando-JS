// Objeto - Estrutura que representa um objeto do mundo real (Ex. Produto, Pessoas, Profissão)
// Objeto pode ser modelado - Classe (Nome deve começar com letra maiuscula)

class Livro {
    titulo;
    paginas;
    autor;
    volume;
    isbn;
    alugar = function() {
        console.log("Alugado!")
    };

    static isLivro(livro) { // isLivro - é uma função estática, ou seja não será necessário instanciar o objeto para acessa-la
        let flag = livro.titulo == undefined;
        return !flag;
    }


    constructor(titulo, paginas, autor, isbn) {
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.isbn = isbn;
        // this - Referencia a classe/objeto
    }
}

// Para criar a estrutura "fisica" do objeto pela classe fazer uma INSTÂNCIA
let arquiteturaLimpa = new Livro("", "", "", ""); // instância do objeto Livro
// console.log(typeof arquiteturaLimpa);

arquiteturaLimpa.titulo = "Arquitetura Limpa";
arquiteturaLimpa.autor = "Carlos Eduardo";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.isbn = "978-85-508-0460-6";
// console.log(arquiteturaLimpa);
// arquiteturaLimpa.alugar();

// console.log("OI");
// console.error("OI");
// console.warn("OI");
// console.info("OI");

let javaIniciantes = new Livro("Java para iniciantes", 500, "Carlos Eduardo", "9788550");
javaIniciantes.categoria = "Tecnologia"; // adiciona uma nova parte
console.log(javaIniciantes);

// aplicando o uso do "static"
// let livroTeste = new Livro();
// livroTeste.titulo = "Titulo Teste";
// console.log(Livro.isLivro(livroTeste));

// Objeto é uma estrutura que representa o objeto do mundo real no nosso código.
// Classe - pLanta ou o Modelo do objeto
// Instância é o processo de construir o objeto "new Livro()"
// Construtor é a função que gere o objeto fisico
// Caracteristicas - Atributos, Propriedades, Métodos/Funções

const objeto = {}; // cria um objeto sem classe
// console.log(typeof objeto);
console.log(objeto);