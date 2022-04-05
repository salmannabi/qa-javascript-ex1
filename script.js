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

// Excercise Conditionals, Trythy/Falsey
let num2 = 16;

if (num >= 18 && num <= 65) {
    console.log("Condition satisfied");
} else if (num < 18) {
    console.log("Condition less than 18 is triggered")
}else {
    console.log("Condition not satisfied");
}

let age = 40;

age > 50 ? console.log("age is greater than 50") : console.log("age is not greater than 50");

// Objects, Arrays and JSON
let darthVader = {
    allegiance: "Empire",
    weapon: "Saber",
    sith: true
}

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is ${darthVader.weapon}`);
console.log(`Darth Vader is a sith?: ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi?: ${darthVader.sith ? "false" : "true"}`);

let myArray = ["hello", "everyone"];

console.log(myArray.length);

myArray.push("my");
myArray.push("name");
myArray.push("is");

console.log(myArray.length);

myArray.shift();

console.log(myArray.length);

for (let elem of myArray) {
    console.log(elem);
}

// Excercise Functions, function expressions and Arrow functions
function sub(num1, num2) {
    return num1 - num2;
}

console.log(sub(100, 10));

function introString(name, age, gender) {
    return `My name is ${name}, I am ${age} years old and I am a ${gender}`;
}

console.log(introString("Felix", 20, "Male"));

answer = (n1, n2) => Math.pow(n1, n2);

console.log(answer(3, 3));