const femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
const maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

const allNames = femaleNames.concat(maleNames);
console.log(allNames);

let newName = prompt("Podaj imię");
console.log(newName);

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}
else {
    alert("Imię jest już w tablicy")
}
console.log(allNames);