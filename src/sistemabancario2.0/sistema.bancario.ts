import { ContaCorrente } from "./conta.corrente";
import { Poupanca } from "./poupanca";

export class SistemaBancario {
    private static CONTAS_CORRENTE: ContaCorrente[] = [];

    static get listaContasCorrente(): ContaCorrente[] {
        return SistemaBancario.CONTAS_CORRENTE;
    }

    adicionarContaCorrente(numeroConta: string, saldo: number = 0) {
        const novaContaCorrente = new ContaCorrente();
        novaContaCorrente.numeroConta = numeroConta;
        novaContaCorrente.saldo = saldo;
        SistemaBancario.CONTAS_CORRENTE.push( novaContaCorrente );
    }

    procurarConta(numeroConta: string): ContaCorrente {
        let contaEncontrada = 
            SistemaBancario.CONTAS_CORRENTE.find(c => c.numeroConta == numeroConta);
        if(contaEncontrada == null){
            throw new Error(`Conta não encontrada: ${numeroConta}`);
        }
        return contaEncontrada;
    }

    // numeroConta: agencia + número da conta
    realizarSaqueContaCorrente(numeroConta: string, valorSaque: number) {
        const contaEncontrada = this.procurarConta(numeroConta);
        contaEncontrada.saldo = contaEncontrada.saldo - valorSaque;
        console.log(`Saque realizado. Saldo atual: ${contaEncontrada.saldo}`);
    }

    realizarDepositoContaCorrente(numeroConta: string, valorDepositado: number) {
        const contaEncontrada = this.procurarConta(numeroConta);
        contaEncontrada.saldo = contaEncontrada.saldo + valorDepositado;
        console.log(`Depósito realizado. Saldo atual: ${contaEncontrada.saldo}`);
    }

    visualizarSaldoContaCorrente(numeroConta: string) {
        const contaEncontrada = this.procurarConta(numeroConta);
        console.log(`Saldo atual: ${contaEncontrada.saldo}`);
    }
}
