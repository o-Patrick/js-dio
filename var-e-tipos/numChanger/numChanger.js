let numbers = [];
let qtd = prompt('How many numbers do you wish to insert?');
for (let i = 0; i <= qtd - 1; i++){
	numbers.push(prompt('Insert a number:'));
};

function numChanger(numbers){
	if(numbers.length == 0){
		return -1;
	} else{
		for (i in numbers){
			if(numbers[i] % 2 == 0 && numbers[i] != 0){
				numbers[i] = 0;
			};		// if even !=0
		};		// for in
		return numbers;
	};		// if -1
};		// function

alert(numChanger(numbers));

document.querySelector('p').style.display = 'block';