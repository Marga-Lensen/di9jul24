let age = 44;
//age = age +1;
//age += 1;
//age + 1;
age ++;//plus 1
age = age + 2;
//genauso gut ist age += 2;

console.log(age);

let pizzaPrice = 10;
let pizzaCount = 0;
pizzaCount ++;
pizzaCount ++;
pizzaCount --;

console.log(`pizza price is : ` , pizzaCount * pizzaPrice);


let num = 2
num += 5; // num = num * 5
num /= 2; // num = num / 2
console.log(num); 
//reset num : num = 0


// Vergleichsoperatoren

// Gleichheit == 

let age2 = 50;
console.log(age2 == 51);// false 
console.log(age2 == 50 , age2 == "50");// beide true. 
//PROBLEM Gleichheit


//Strenge Gleichheit === (value, data type);
//dies bedeutet, dass nicht nur die Wert (50), sondern auch der data type (string / number / boolean / ...) gleich.

// = anweisung
// == wert
// === wert UND datentyp

console.log("2 === 5 : ", 2 === 5);
console.log("Hello" === "hello"); // false
console.log("hallo" === "hallo");// true

let userPassword = "abcd124";
let userInput = "abcd1234";
if(userPassword === userInput){
    console.log(`password correct`);
}
//user Eingabe ist eigentlich immer bei default "string"


//ungleichheit !=

console.log("2" != 2); // false; der Wert ist gleich
console.log("2" !== 2); // true; wert ist zwar gleich aber typ ungleich

if(userInput !== userPassword){
    console.log('password not correct');
}

console.log(!true); // not true // false
console.log(!false); // not false // true
// != not equal
// == equal
// === equal


// ### Größer als >

console.log(" ---");
console.log(5 > 7); // false
console.log(7 > 5); // true
// let name = "Maximilian"; 
let name = "Max"; // name LENGTH = 3
console.log(name.length > 5);


    // Kleiner als oder gleich:

let driverAge = 70;
driverAge ++; // 71
driverAge -= 2; // 69
console.log("driverAge <= 70 " , driverAge <= 70);
console.log(" --- ");

//Größer als oder gleich
driverAge = 18;
console.log("driverAge: ", driverAge," >= 18",driverAge >= 18);

let password = "abcd1234";
console.log(password.length, " >= 8", password.length >= 8);