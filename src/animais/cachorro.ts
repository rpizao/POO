import { Animal } from "./animal"

export class Cachorro extends Animal {
    constructor(idade: number) {
        super();

        this.especie = "Canina";
        this.idade = idade;
        this.indiceMultiplicador = 7;
    }

    emitirSom(): void {
        console.log("Au au");
    }
}