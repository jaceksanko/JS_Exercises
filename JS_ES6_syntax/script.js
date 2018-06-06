//Zadanie 1
let x = 'Hello';
let y = 'Word';

let z = `${x} ${y}`;
console.log(z);

//Zadanie 2 
const multiply = (a = 1, b =1) => a * b;

console.log(multiply(5));
console.log(multiply(2, 5));

console.log(multiply(6, 6));

//Zadanie 3
const average = (...numbers) => numbers.reduce((a, b) => (a + b),0)/numbers.length;
	/*let sum = 0;
	numbers.forEach(el => sum += el);
	return sum/numbers.length;*/

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zadanie 4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = array;
console.log(firstname, lastname);

