import { SistemaBancario } from "./sistema.bancario";
import { Cliente } from "./sistemabancario/cliente";
import { ContaCorrente } from "./sistemabancario/conta.corrente";

/*
const contaCorrenteDoPizao = new ContaCorrente(cliente, ag, cc);
contaCorrenteDoPizao.agencia = 1;
contaCorrenteDoPizao.conta = 9;

contaCorrenteDoPizao.depositar(100);

console.log("EXTRATO");
for(let itemExtrato of contaCorrenteDoPizao.consultarExtrato()) {
    console.log(`${itemExtrato}`);
}

contaCorrenteDoPizao.sacar(50);

console.log("EXTRATO");
for(let itemExtrato of contaCorrenteDoPizao.consultarExtrato()) {
    console.log(`${itemExtrato}`);
}
 */

const sistema = new SistemaBancario();

const cliente1 = new Cliente();
cliente1.nome = "Rafael";

sistema.imprimirExtrato(cliente1, "CC");