const n1 = prompt('Insert the FIRST number:');
const n2 = prompt('Insert the SECOND number:');

function isNum(n1, n2){
	if (!isNaN(n1) && !isNaN(n2)) return true;
}

if (!isNum(n1, n2)){
	alert('Please insert both numbers correctly!');
} else{
	alert(compare(Number(n1), Number(n2)));

	function compare(n1, n2){
		const phrase1 = phraseEqual(n1, n2);
		const phrase2 = phraseTenTwenty(n1, n2);
		return `${phrase1} ${phrase2}`;
	};
	
	function phraseEqual(n1, n2){
		let equalNot = '';
		if(n1 !== n2){ equalNot = 'not '; };
		return `The numbers ${n1} and ${n2} are ${equalNot}equal.`
	};

	function phraseTenTwenty(n1, n2){
		const sum = n1 + n2;
		let ten = 'fewer than';
		let twenty = 'fewer than';
		if(sum > 10){
			ten = 'greater than';
		} else if(sum === 10){
			ten = 'equal to';
		};
		if(sum === 20){
			twenty = 'equal to';
		} else if(sum > 20) {
			twenty = 'greater than';
		};
		return `The sum of both is ${sum}, which is ${ten} 10 and ${twenty} 20.`
	};
};