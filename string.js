// toUpperCase()
// toLowerCase()
// slice()
// includes()
// trim()

const firstName = "John";
const lastName = "Doe"
const empty = "";
const space = " ";
console.log(firstName, lastName.toUpperCase());
// wichtig sind die pinken klammern an toUpperCase, sonst funktioniert die funktion nicht

// length
console.log(firstName.length); // 4
console.log(lastName.length); // 3
console.log(empty.length); // 0
console.log(space.length); // 1


const text = "javascript";
console.log(text[0]); // erste Buchstabe number 0
console.log(text[6]); // r
console.log(text[10]); // undefined; nur 9 Buchstaben

// check wieviele buchstaben, bzw welche nummer hat die letzte
const num = text.length -1;
console.log(num); // 9
console.log(text[num]); // t ist die letzte Buchstabe