const age = 18;

// Strict equality operator
if (age === 18) console.log(`You just became an adult.`);

// Loose equality operator
if (age == 18) console.log(`You just became an adult.`); // Does coercion (should be avoided as much as possible)

const favourite = Number(prompt(`What's your favourite number`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool, 23 is an amazing number.`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number.`);
} else {
  console.log(`Number is neither 23 nor 7`);
}

if (favourite !== 23) {
  console.log(`Why not 23?`);
}
