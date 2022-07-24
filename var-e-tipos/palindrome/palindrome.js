// Exercise to analyse if a word is a palindrome (words that stay the same if reversed);
// The both approaches were taken from https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// Stays the same
let word = prompt('Insert a word');

if (word.length == 0){
	alert('Please insert a word or phrase!');
} else{
	// Approach 1
	function reverser(word){
		return word.split('').reverse().join('');
		// Same as:
		// let splitStr = word.split('');
		// let reverseStr = splitStr.reverse();
		// let joinStr = reverseStr.join('');
		// return joinStr;
	};

	/* // Approach 2
		function reverser(word){
			let newString="";
			for(let i = word.length - 1; i >= 0 ; i--){
				newString += word[i]; // adds every letter from the string in reverse
			};
			return newString;
		};
	*/

	// Stays the same
	if (word === reverser(word)){
		alert('This word is a palindrome.');
	} else{
		alert('This word is NOT a palindrome.');
	};
};

document.querySelector('p').style.display = 'block';