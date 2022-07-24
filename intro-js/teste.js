function returnEvenValues(array){
	let evenNums = [];
	let oddNums = [];
	for(let i = 0; i < array.length; i++){
		if(array[i] % 2 === 0){
			evenNums.push(array[i]);
		} else{
			oddNums.push(array[i]);
		};
	};
	console.log(`Os números pares são: ${evenNums}\nOs números ímpares são: ${oddNums}`);
};

let array =[1, 2, 4, 5, 7, 8];

returnEvenValues(array);