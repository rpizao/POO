import { SistemaBancario } from "./sistemabancario2.0/sistema.bancario";

const sistema = new SistemaBancario();
sistema.adicionarContaCorrente("00001-0", 5000);
sistema.adicionarContaCorrente("00001-1", 1500);
sistema.adicionarContaCorrente("00001-2");

console.log(`Minhas contas corrente:`);
console.log(SistemaBancario.listaContasCorrente);

try {
    sistema.realizarSaqueContaCorrente("00001-0", 500);

    console.log(`Minhas contas corrente:`);
    console.log(SistemaBancario.listaContasCorrente);

    sistema.realizarDepositoContaCorrente("00001-2", 100);

    console.log(`Minhas contas corrente:`);
    console.log(SistemaBancario.listaContasCorrente);

    sistema.realizarDepositoContaCorrente("00001-9", 100);
}
catch(erro) {
    console.log(erro);
}