var n1 = Number(prompt('Insert the FIRST number:'));
var n2 = Number(prompt('Insert the SECOND number:'));

function verifier(n1, n2){
	let sum = n1 + n2;
	let equalNot = n1 === n2 ? 'The numbers are equal' : 'The numbers are different'; // returns if the numbers are equal or not
	let ten; // greater/fewer than 10
	let twenty; // fewer/greater than 20
	if (sum > 10){
		ten = 'The sum of both numbers is greater than 10';
	} else if(sum === 10){
		ten = 'The sum of both numbers is equal to 10';
	} else{
		ten = 'The sum of both numbers is fewer than 10';
	}
	if (sum < 20){
		twenty = 'The sum of both numbers is fewer than 20';
	} else if(sum === 20){
		twenty = 'The sum of both numbers is equal to 20';
	} else{
		twenty = 'The sum of both numbers is greater than 20';
	}
	alert(`${equalNot}. The sum of both numbers is ${sum}. ${ten}. ${twenty}.`);
};

verifier(n1, n2);