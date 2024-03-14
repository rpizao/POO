import { Midia } from "./midia";

export class Filme extends Midia {
    constructor(titulo: string, private elenco: string[]){
        super(titulo);
    }

    reproduzir(): void {
        const elenco = this.elenco.join(", ");
        console.log(`Reproduzindo o filme ${this.titulo} com ${elenco}`);
    }
}