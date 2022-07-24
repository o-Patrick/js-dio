const nums = [1, 2, 3, 4, 5];

const orange = {
	price: 3,
}

const apple = {
	price: 2,
}

function mapArray(arr, item){
	return arr.map(function (n){
		return n * this.price;
	}, item);
};

console.log(`This -> orange: ${mapArray(nums, orange)}`);
console.log(`This -> apple: ${mapArray(nums, apple)}`);

/* Without .this
	const array = [1, 2, 3, 4, 5];
	console.log(array.map((num) => num * 2));
*/