// 2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

function balanceCalc(itens, balance){
	if (!itens || !itens.length || !balance) return "Please send all parameters";

	const finalBalance = itens.reduce((acc, item) => acc - item.price, balance); // acc == balance

	return `Final balance: ${finalBalance}`;
}

const priceList = [
	{
		price: 10,
		name: "apple",
	},
	{
		price: 12,
		name: "grape",
	},
	{
		price: 31,
		name: "banana",
	},
	{
		price: 24,
		name: "peach",
	},
];

const balance = 200;

console.log(balanceCalc(priceList, balance));

/* // First try (doesn't work)
	const priceList = [1, 2, 3, 4, 5, 6, 7, 8];
	const balance = 200;

	const finalBalance = function(totalSpent, currentPrice){
		for(i in priceList){
			totalSpent += currentPrice;
		};
		return balance - totalSpent;
	};

	console.log(priceList.reduce(finalBalance,));
*/