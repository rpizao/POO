import { Poupanca } from "./poupanca";
import { Cliente } from "./sistemabancario/cliente";
import { ContaCorrente } from "./sistemabancario/conta.corrente";

export class SistemaBancario {

    codigoOperacaoContaCorrente: string = "CC";
    listaContaCorrente: ContaCorrente[] = [];

    codigoOperacaoPoupanca: string = "PP";
    listaPoupanca: Poupanca[] = [];

    // Vamos implementar um dia!
    adicionarNovaConta() {  }
    
    // Imprimir extrato
    imprimirExtrato(cliente: Cliente, codigoOperacao: "CC" | "PP"): void {
        try {
            const conta = 
                this.recuperarContaCliente(cliente, codigoOperacao);
            
            if(conta != null) {
                console.log("---- INÍCIO | EXTRATO ----");
                for(let itemExtrato of conta.consultarExtrato()) {
                    console.log(`${itemExtrato}`);
                }
                console.log("---- FIM | EXTRATO ----");
            }
            else {
                throw new Error(`Cliente ${cliente.nome} não existe neste banco.`);
            }
        }
        catch(error){
            console.log("Ocorreu um erro ao imprimir o extrato");
        }
    }

    recuperarContaCliente(cliente: Cliente, codigoOperacao: "CC" | "PP") {
        switch (codigoOperacao) {
            case "CC":
                return this.listaContaCorrente.find(cc => cc.cliente?.nome == cliente.nome);
            case "PP":
                return this.listaPoupanca.find(pp => pp.cliente?.nome == cliente.nome);
            default:
                throw new Error(`Codigo inválido: ${codigoOperacao}`);
        }
    }

    consultarSeClienteExiste(cliente: Cliente, codigoOperacao: "CC" | "PP"): boolean {
        switch (codigoOperacao) {
            case "CC":
                return this.listaContaCorrente.some(cc => cc.cliente?.nome == cliente.nome);
            case "PP":
                return this.listaPoupanca.some(pp => pp.cliente?.nome == cliente.nome);
            default:
                throw new Error(`Codigo inválido: ${codigoOperacao}`);
        }
    }

    // realizar um saque
    // realizar um deposito
    // consultar saldo
    // ...

}