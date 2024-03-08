import { Cliente } from "./cliente";

export class ContaGeral {

    private geradorAgencia: number = 1;
    private geradorConta: number = 1;

    private agencia?: number;
    private conta?: number;
    private _cliente?: Cliente;
    protected saldo: number = 0;
    protected extrato: string[] = [];

    constructor(novoCliente: Cliente){
        this._cliente = novoCliente;
    }

    sacar(valor: number): boolean {
        let novoSaldo = this.saldo - valor;
        let mensagemExtrato = `
            Você sacou ${valor} | Saldo anterior: ${this.saldo} | Saldo atualizado: ${novoSaldo}
        `;
        this.saldo = novoSaldo;

        // Registrar a movimentação
        this.extrato.push(mensagemExtrato);
        return true;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        let novoSaldo = this.saldo + valor;
        let mensagemExtrato = `
            Você depositou ${valor} | Saldo anterior: ${this.saldo} | Saldo atualizado: ${novoSaldo}
        `;
        this.saldo = novoSaldo;
        this.extrato.push(mensagemExtrato);
    }

    consultarExtrato(): string[] {
        return this.extrato;
    }

    get cliente(): Cliente | undefined {
        return this._cliente;
    }
}