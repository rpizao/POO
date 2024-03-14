abstract class Midia {
    protected titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    abstract reproduzir(): void;
}

class Filme extends Midia {
    reproduzir(): void {
        console.log(`Reproduzindo filme: ${this.titulo}`);
    }
}

class Musica extends Midia {
    // outros atributos
    reproduzir(): void {
        console.log(`Reproduzindo música: ${this.titulo}`);
    }
}

let filme1 = new Filme("Turma da mônica");
filme1 = new Filme("Outro título");