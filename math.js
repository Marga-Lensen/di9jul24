

// Math.ceil

/*
Math.ceil(2.60) // 3

*/

const milkPrice = 1.69;
const cookiesPrice = 2.25;

const total = milkPrice + cookiesPrice;
console.log(total); // 3.94

const roundedCeil = Math.ceil(total); 
console.log(roundedCeil); // 4 (kein Wechselgeld)
console.log(" --- ");

// Math.floor

/*
Math.floor(56.8) // 56

*/

const totalMinutes = 88;
const hours = totalMinutes / 60;
console.log("88 min are ",  hours, " hours");
const fullHours = Math.floor(hours);
console.log("abgerundet mit Math.floor sind das ", fullHours, "hours");
console.log(" --- ");

//counter Beispiel nochmal

let totalSeconds = 3950;
let h = totalSeconds / 3600;
console.log(totalSeconds , "seconds are:", Math.floor(h) , "hours" );
let m = (totalSeconds % 3600) / 60;
console.log(totalSeconds , "seconds are:", Math.floor(h) , "hours and " , Math.floor(m), "minutes");


//### Math.round

/*
Math.round(56.8) // 57

*/

let userRating = 4.7;
let rounded = Math.round(userRating)// 5
console.log("rounded from ",userRating," is",rounded); 

userRating = 4.4;
// let rounded = Math.round(userRating)// 4
console.log("rounded from ",userRating," is",rounded); 


//### Math.random
/**
 * Math.random() // zwischen 0 und 1
 * Math.random() * 20 // zwischen 0 und 19
 * Math.random() * 21 // zwischen 0 und 20
 */
// random rabatt zw 5% und 20%
let randomDiscount = (Math.random() * 15 +1) + 5;
console.log(Math.floor(randomDiscount));

// random number between 10 und 30
// min = 10 ; max = 30
// (Math.random() * (max - min)+1) + min
console.log("random between 10 and 30 : ",Math.floor(Math.random() * (30 -10 + 1) + 10));
//packe es in einem variable
let randomNum = (Math.random() * (30 - 10 +1)) + 10;
console.log("random between 10 and 30 : ",Math.floor(randomNum));
