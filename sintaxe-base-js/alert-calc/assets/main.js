function calc(){
	const ops = Number(prompt('Choose an operation:\n1 - Addition (+)\n2 - Subtraction (-)\n3 - Multiplication (*)\n4 - Rational division (/)\n5 - Interger division (%)\n6 - Potentiation (**)'));

	let n1 = Number(prompt('Insert the FIRST value:'));
	let n2 = Number(prompt('Insert the SECOND value:'));

	function sum(){
		alert(`${n1} + ${n2} = ${n1 + n2}`);
	};
	function sub(){
		alert(`${n1} - ${n2} = ${n1 - n2}`);
	};
	function mult(){
		alert(`${n1} * ${n2} = ${n1 * n2}`);
	};
	function rDiv(){
		alert(`${n1} / ${n2} = ${n1 / n2}`);
	};
	function iDiv(){
		alert(`${n1} % ${n2} = ${n1 % n2}`);
	};
	function pot(){
		alert(`${n1} ** ${n2} = ${n1 ** n2}`);
	};

	switch (ops){
		case 1:
			sum();
		 	break;
		case 2:
			sub();
			break;
		case 3:
			mult();
			break;
		case 4:
			rDiv();
			break;
		case 5:
			iDiv();
			break;
		case 6:
			pot();
			break;
	};
};

calc();