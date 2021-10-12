// Importação dos outros arquivos
import { cliente } from "../banco/Cliente.js";
import { contaCorrente } from "../banco/ContaCorrente.js";

// Cliente 1
const cliente1 = new cliente("Beatriz Vieira", 11122233300);
const contaCorrentecliente1 = new contaCorrente('0001', cliente1);

// Cliente 2
const cliente2 = new cliente("Asdrubal Silva", 12312312300);
const contaCorrentecliente2 = new contaCorrente('0002', cliente2);

// Apresenta as contas
console.log(cliente1, contaCorrentecliente1);
console.log(cliente2, contaCorrentecliente2);