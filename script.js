// Use STRICT and CONSOLE

/*
    use strict:
    Forces us to write secure JavaScript
    Stops us from using protected words, accidentaly making
    global variables etc.
*/

// 'USE STRICT'

// let let = 1;

// console.log("Hello World!");
// console.info("This is info!");
// console.warn("This is a warning!");
// console.error("This is an error message!");

// // Styling the console
// console.log(`%c` + `some text`, `color: black; background-color: white; font-size: 30px; padding: 15px;`);

// console.log(`%c` + `red text` + `%c` + `blue text`, `color: red;`, `color: blue;`);

let fName = "First Name";
let sName = "Last Name";
let loc = "Where are you from?";
let star = "What is your star sign?";

console.log(fName);
console.info(sName);
console.warn(loc);
console.error(star);

let car = "Audi";
let model = "A5";

console.log("My favourite car is " + car + " and the model is " + model);
console.log("%c" + "Excercise Text", "color: orange; font-family: fantasy; font-weight: bold; background-color: black; padding: 10px;")

// Excercises 'Variables'
let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

// Template Literals
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}.`);

// Excercises
for (let a = 100; a < 200; a++) {
    console.log(`a = ${a}`);
}

for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

let num = 1;

while (num <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`Printing ${num} time: ${i}`);
    }
    num++;
}

let date = new Date();
let day = date.getDay();

switch(day) {
    case 0:
        console.log("Today is Sunday!");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("What day is that?");
        break;
}