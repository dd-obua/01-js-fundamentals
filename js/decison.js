const age = 15;
const minMatureAge = 18;

if (age >= 18) {
  console.log(`Stella can obtain a driver's licence`);
} else {
  const yearsLeft = minMatureAge - age;
  console.log(`Stella is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1993;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
