// Introduction

let js = "amazing";

if ((js = "amazing")) {
  console.log("JavaScript is fun!");
}

// Values and Variables
console.log("Obua"); // Obua here is a value

let firstName = "Denis"; // firstName is a variable
console.log(firstName);

// There are variable naming conventions

// Data types

let jsIsFun = true;
console.log("jsIsFun:", jsIsFun);

console.log("Type of jsIsFun:", typeof jsIsFun);
console.log("Type of 23:", typeof 23);
console.log("Type of Denis:", typeof "Denis");

jsIsFun = "Yes";
console.log("jsIsFun:", jsIsFun);
console.log("Type of jsIsFun:", typeof "jsIsFun");

let year;
console.log("Year:", year);
console.log("Type of year:", typeof year);

year = 1991;
console.log("Year:", year);
console.log("Type of year:", typeof year);

let age = 30;
age = 31; // age has been reassigned a value (i.e. mutated)

console.log("------------------------------");

// Bug in JavaScript
let nullBug = console.log("Type of null: ", typeof null);

console.log("------------------------------");
// const and var (variable declerations)
const birthYear = 1993;
console.log(birthYear);

// Using a variable without declaration (it JavaScript)
middleName = "Dan";
console.log(middleName);
// It is a terrible idea (using undeclared variables)

console.log("------------------------------");

// JavaScript operators
const now = 2023;
const ageDan = now - birthYear;
console.log("Dan's age:", ageDan);

const ageJoe = now - 1990;
console.log("Joe's age:", ageJoe);
console.log("Double:", ageJoe * 2);
console.log("Halve:", ageJoe / 2);

let lastName = "Obua";
console.log(firstName + " " + lastName);

console.log("------------------------------");

// Operators
// Math and assignment operators
let x = 5 + 10;
x += 10;
console.log(x);

x *= 10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// Comparision operators
console.log("Is Dan older than Joe:", ageDan > ageJoe);
console.log(ageDan >= 18);
const isAdult = ageJoe >= 18;
