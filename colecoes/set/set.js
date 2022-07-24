const group = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueElements(groupArr){
	const uniqueSet = new Set(groupArr);
	return [...uniqueSet];
}

console.log(uniqueElements(group));