import { Midia } from "./midia";

export class Musica extends Midia {
    constructor(titulo: string, private autor: string, private origem: string) {
        super(titulo);
    }

    reproduzir(): void {
        console.log(
            `Tocando a música ${this.titulo} de ${this.autor}. 
            ${this.origem}`);
    }

}