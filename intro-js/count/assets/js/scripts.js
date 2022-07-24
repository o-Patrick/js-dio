/* resolução 2 (minha) com EventListeners */
function count(){
	let currentNumberWrapper = document.getElementById('currentNumber');
	let currentNumber = Number(currentNumberWrapper.textContent);
	let decre = document.getElementsByName('subtrair')[0];
	let incre = document.getElementsByName('adicionar')[0];
	decre.addEventListener('click', function(){
		currentNumber--;
		currentNumberWrapper.innerHTML = currentNumber;
	});
	incre.addEventListener('click', function(){
		currentNumber++;
		currentNumberWrapper.innerHTML = currentNumber;
	});
	console.log(num);
};

/* resolução 1 (stebsnusch)
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = Number(currentNumberWrapper.textContent);

function decrement(){
	currentNumber--;
	currentNumberWrapper.innerHTML = currentNumber;
}

function increment(){
	currentNumber++;
	currentNumberWrapper.innerHTML = currentNumber;
}
*/