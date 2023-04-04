// falsy - values that are not false but will become false when converted to a boolean
// The 5 falsy values are: 0, '', undefined, null, NaN and false itself

console.log("Falsy of 0:", Boolean(0));
console.log("Falsy of undefined:", Boolean(undefined));
console.log("Falsy of null:", Boolean(null));
console.log("Falsy '':", Boolean(""));
console.log("Falsy of NaN:", Boolean(NaN));
console.log("Falsy of false:", Boolean(false));

// Everything thing else is coerced to true (i.e. are truthy)
console.log("Falsy of {}:", Boolean({})); // An empty object

console.log();

const money = 0;
// js coerces all conditions into a boolean
if (money) {
  console.log(`Don't spend it all.`);
} else {
  console.log(`You should get a job!`);
}

let height;

if (height) {
  console.log(`Hey, height is defined`);
} else {
  console.log(`No, height is not defined`);
}

// If height=0, an unexpected result if returned. This is a bug
