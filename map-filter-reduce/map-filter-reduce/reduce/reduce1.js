// 1. Some todos os números de um array.

// 1
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const sumFunc = function(accumulator, currentValue){
	return accumulator += currentValue;
}

console.log(array.reduce(sumFunc));