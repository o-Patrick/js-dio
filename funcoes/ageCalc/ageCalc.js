const person1 = { name: "Maria", age: 19, };
const person2 = { name: "Jorge", age: 20, };
const person3 = { name: "Michelle", age: 17, };
const person4 = { name: "Anna", age: 23, };

function ageCalc(years){
	return `In ${years} years, ${this.name} will have ${this.age + years} years.`;
};

console.log(ageCalc.call(person4, 5));
console.log(ageCalc.apply(person4, [5]));