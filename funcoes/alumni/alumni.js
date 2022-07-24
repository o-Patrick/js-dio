// Method 4 (by stebsnusch (I just translated it))
const students = [
	{
		name: 'João',
		grade: 5,
		class: '1B',
	},
	{
		name: 'Sofia',
		grade: 9,
		class: '1B',
	},
	{
		name: 'Paulo',
		grade: 6,
		class: '2C',
	},
	{
		name: 'Miguel',
		grade: 4,
		class: '2C',
	},
];

function inAvg(students, average){
	let inAvgAlumni = [];
	for (i in students){
		let {name, grade} = students[i];
		if (grade >= average){
			inAvgAlumni.push(name);
		}
	};
	return inAvgAlumni;
};

console.log(inAvg(students, 5));

/* // Method 3 (works, but...): using object containing arrays (... with literally just one destructuring)
function registry(){
	// comments in this function are for testing only. Switch between their versions to use browser or console
	// let qtd = Number(prompt("How many students do you wish to add?"));
	let qtd = 3;
	let alumniObj = {
		names: [],
		grades: [],
	};
	let n = 1; // for counting the students
	let g = 10; // adds a static starting grade letter getting decremented
	for (let i = 0; i < qtd; i++){
		// alumniObj.names.push(Number(prompt(`Insert the ${i+1}º name:`)));
		// alumniObj.grades.push(Number(prompt(`Insert the ${i+1}º grade:`)));
		alumniObj.names.push(n++);
		alumniObj.grades.push(g--);
	};
	return alumniObj;
};

function avgCalc({grades}){ // calculates the average grade
	let average = 0;
	for (i in grades){
		average += grades[i];
	};
	average /= grades.length;
	return average;
};

function inAvg(){ // returns which students have a grade greater than or equal to the average
	let list = registry();
	let average = avgCalc(list);
	let inAvgAlumni = [];
	for (i in list.grades){
		if(list.grades[i] >= average){
			inAvgAlumni.push(list.names[i]);
		};
	};
	return inAvgAlumni;
};

console.log(inAvg());
*/

/* // Method 2 (WORKS): using object containing arrays (without destructuring)
function registry(){
	// comments in this function are for testing only. Switch between their versions to get values using browser or console
	let qtd = Number(prompt("How many students do you wish to add?"));
	// let qtd = 3;
	let alumniObj = {
		names: [],
		grades: [],
	};
	// let n = 1; // for counting the students
	// let g = 10; // adds a static starting grade letter getting decremented
	for (let i = 0; i < qtd; i++){
		alumniObj.names.push(Number(prompt(`Insert the ${i+1}º name:`)));
		alumniObj.grades.push(Number(prompt(`Insert the ${i+1}º grade:`)));
		// alumniObj.names.push(1);
		// alumniObj.grades.push(g--);
	};
	return alumniObj;
};

function avgCalc(grades){ // calculates the average grade
	let average = 0;
	for (i in grades){
		average += grades[i];
	};
	average /= grades.length;
	return average;
};

function inAvg(){ // returns which students have a grade greater than or equal to the average
	let list = registry();
	let average = avgCalc(list.grades);
	let inAvgAlumni = [];
	for (i in list.grades){
		if(list.grades[i] >= average){
			inAvgAlumni.push(list.names[i]);
		};
	};
	return inAvgAlumni;
};

console.log(inAvg());
*/

/* // Method 1 (UNFINISHED): using arrays only (the names aren't added correctly and I have no idea why):
let alumni = ["a", "b", "c"]; // name of the students
let grades = [10, 5, 7]; // grades of each student

function avgCalc(){ // calculates the average grade
	let average = 0;
	for(i in alumni){
		average += grades[i];
	};
	average /= alumni.length;
	return average;
};

function inAvg(){ // for the students with a grade greater than or equal to the average
	let inAvgAlumni = [];
	for (let i=0; i < alumni.length; i++){
		if(grades[i] >= avgCalc()){
			inAvgAlumni.push(alumni[i]);
		};
	};
	return inAvgAlumni;
};

console.log(inAvg());
*/

/* // Method 0 (UNFINISHED): The objective was to use a single array for alumni and grades, but I couldn't figure out how to do it:
function registry(alumni, grades, average){
	let avgAlumni = []; // alumni with grades greater or equal to the average
	let i = 0;
	while(i < alumni.length){
		alumni[i]
		i++;
	};
};

registry(alumni, average);
*/