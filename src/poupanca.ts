import { Cliente } from "./sistemabancario/cliente";
import { ContaGeral } from "./sistemabancario/conta.geral";

export class Poupanca extends ContaGeral {

    constructor(cliente: Cliente){
        super(cliente);
    }
    
    taxaDeRendimento: number = 0.5;

    sacar(valor: number): boolean {
        let novoSaldo = this.saldo - valor;
        if(novoSaldo < 0){
            return false; // sai do método
        }
        return super.sacar(valor);
    }
}