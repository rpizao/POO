import { Animal } from "./animal";

export class Gato extends Animal {
    constructor(idade: number) {
        super();

        this.especie = "Felino";
        this.idade = idade;
        this.indiceMultiplicador = 15;
    }

    emitirSom(): void {
        console.log("Miau");
    }
}