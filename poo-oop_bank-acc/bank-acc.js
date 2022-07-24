/*
   1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
   2. Dentro de ContaBancaria, construa o getter e o setter de saldo;
   3. Dentro de ContaBancaria, crie os métodos sacar e depositar;
   4. Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
   5. Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
   6. Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
   7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
   8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
   9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valuees menores que 500 reais.
*/

class ContaBancaria{
	constructor(agencia, numero, tipo){
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0; // o _ serve para que getter e setter possam ter o "mesmo" nome que o parâmetro, sem que ocorra erro;
	}

	set saldo(value){
		this._saldo = value;
	}

	get saldo(){
		return this._saldo;
	}

	saque(value){
		if(value >= this._saldo){
			return console.log("Operação rejeitada! Saldo insuficiente.");
		}
		this._saldo -= value;
		return this._saldo;
	}

	deposito(value){
		this._saldo += value;
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria{
	constructor(agencia, numero, cartaoCredito){
		super(agencia, numero);
		this.tipo = "corrente";
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(value){
		this._cartaoCredito = value;
	}

	get cartaoCredito(){
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria{
	constructor(agencia, numero){
		super(agencia, numero);
		this.tipo = "poupança";
	}
}

class ContaUniversitaria extends ContaBancaria{
	constructor(agencia, numero){
		super(agencia, numero);
		this.tipo = "universitária";
	}

	saque(value){
		if (value > 500){
			return "Saque negado! O limite para saque é R$500,00.";
		}
		this._saldo -= value;
		return this._saldo;
	}
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaPoup = new ContaPoupanca(2, 874);
const contaUni = new ContaUniversitaria(3, 333);