// Polimorfismo - trabalhando com interface

interface Produto {
    nome: string;
    preco: number;
    mostrarDetalhe() : void; // Imprimir as informações do produto
}

interface ProdutoEmPromocao extends Produto {
    desconto: number;
}

// extends 
class Eletrodomestico implements Produto {
    nome: string = "";
    preco: number = 0;

    mostrarDetalhe(): void {
        console.log("Olá! Eu sou um eletrodomestico");
    }
}

class Hortifruti implements Produto {
    nome: string = "";
    preco: number = 0;

    mostrarDetalhe(): void {
        console.log("Olá! Eu sou um hortifruti");
    }

}

class Movel implements ProdutoEmPromocao {
    nome: string = "";
    preco: number = 0;
    desconto: number = 10;

    mostrarDetalhe(): void {
        console.log("Olá! Eu sou um móvel");
    }

}

class Brinquedo implements Produto {
    nome: string = "";
    preco: number = 0;
    // 20 atributos

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhe(): void {
        console.log("Olá! Eu sou um brinquedo");
    }

}

// Polimorfismo
export class ListaDeCompras {
    carrinhoDeCompras: Produto[] = [];

    // spread
    adicionarNovoItem(...produtos: Produto[]): void {
        this.carrinhoDeCompras.push(...produtos);
    }

    recuperarItem(nomeProduto: string): Produto | undefined {
        return this.carrinhoDeCompras.find(i => i.nome == nomeProduto);
    }

    imprimirItem(nomeProduto: string): void {
        const produto = 
            this.carrinhoDeCompras.find(i => i.nome == nomeProduto);
        produto && produto.mostrarDetalhe();
    }

    removerItemDaLista(produto: Produto): void {
        //
    }

}

const loja = new ListaDeCompras();

const torradeira: Produto = new Eletrodomestico();
torradeira.nome = "Torradeira 110v";
torradeira.preco = 35;

loja.adicionarNovoItem(torradeira);

const maca: Produto = new Hortifruti();
maca.nome = "Maça Fugi | KG";
maca.preco = 9.9;

loja.adicionarNovoItem(maca);

loja.imprimirItem("Maça Fugi | KG");

const produto = loja.recuperarItem("Torradeira 110v");
console.log(`Eu sou um eletrodomestico? ${produto instanceof Eletrodomestico}`);


const armario = new Movel();
armario.nome = "Armario 4 portas";
armario.preco = 400;
armario.desconto = 20;

const mesa = new Movel();
mesa.nome = "Mesa 4 lugares";
mesa.preco = 250;

const videogames = [
    new Brinquedo("Nintendo Switch", 2200),
    new Brinquedo("PS5", 1800),
    new Brinquedo("XBox One", 1500)
];

// loja.adicionarNovoItem(...moveis);

loja.adicionarNovoItem(
    armario, 
    mesa, 
    ...videogames, 
    new Brinquedo("Cards Pokemon - 6 unids", 10)
);

// Classe anêmica
// Só tem atributos e, quase sempre, é uma interface.

console.log(loja.carrinhoDeCompras);