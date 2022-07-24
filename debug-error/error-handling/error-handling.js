/* Exercise (pt-br)
   O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

   1. Crie uma função que recebe um array e um número;
   2. Realize as seguintes validações:
      2.1 Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError;
      2.2 Se o array não for do tipo 'object', lance um erro do tipo TypeError;
      2.3 Se o número não for do tipo 'number', lance um erro do tipo TypeError;
      2.4 Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError;
   3. Utilize a declaração try...catch;
   4. Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof;
*/

/* Based on original */

function funcTest(arr, num){
	try{
		if(!arr && !num) throw new ReferenceError("The parameters have to be sent!");
		if(typeof arr !== "object") throw new TypeError("An Array type element has to be sent!");
		if(typeof num !== "number") throw new TypeError("A Number type element has to be sent!");
		if(arr.length !== num) throw new RangeError("Array length and Number are different!");
		return arr;
	} catch(e){
		if(e instanceof ReferenceError){
			console.log(e.stack);
		} else if(e instanceof TypeError){
			console.log(e.stack);
		} else if(e instanceof RangeError){
			console.log(e.stack);
		} else{
			console.log("Another type of Error!");
		};
	} finally{
		console.log("Error handling complete");
	};
};

console.log(funcTest([1, 2, 3], 3));

/* First try (doesn't work as intended)
const myArray = [];
const num = 0;

function registry(arr, num){
	if (arr.length != num) throw "Length and number are NOT correlated";

	return "Length and number ARE correlated";
}

function funcTest(arr, num){
	try{
		registry(arr, num);
	} catch(e){
		if(arr.length == 0) console.log("ReferenceError: parameters not received");
		if(typeof(arr) != Object) console.log("TypeError: array is not an object");
		if(isNaN(num)) console.log("TypeError: num is NaN");
		if(arr.length != num){
			const myMistake = new Error("Length and number are NOT correlated");
			myMistake.name = "RangeError";
		};
	} finally{
		console.log("Error handling complete");
	};
};

funcTest(myArray, num);
*/