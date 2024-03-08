import { Cliente } from "./cliente";
import { ContaGeral } from "./conta.geral";

export class ContaCorrente extends ContaGeral {

    constructor(cliente: Cliente){
        super(cliente);
    }
    
    chequeEspecial: number = -500;

    sacar(valor: number): boolean {
        let novoSaldo = this.saldo - valor;

        if(novoSaldo < this.chequeEspecial) {
            return false;
        } else {
            return super.sacar(valor);
        }
    }
}