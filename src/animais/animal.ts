// abstract - indica uma classe abstrata
export abstract class Animal {
    // construtor default é vazio

    especie?: string;
    idade: number = 0;
    indiceMultiplicador: number = 0;
    
    calcularIdadeHumana(): number {
        return this.idade * this.indiceMultiplicador;
    }

    abstract emitirSom(): void;
}

