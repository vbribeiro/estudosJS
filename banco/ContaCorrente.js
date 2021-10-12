import { cliente } from "../banco/Cliente.js";

export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    _saldo = 0;

    get saldo() {
        return this._saldo;
    }
    // #saldo = 0 | https://github.com/tc39/proposal-class-fields#private-fields

    constructor(agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        contaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log('Não há saldo suficiente para saque.');
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
            // early return: verifica primeiro se está tudo certo, se não estiver, apenas para o if.
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}