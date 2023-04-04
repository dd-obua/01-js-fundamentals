// Type conversion
// Conversion can only be done to string, to number and to boolean
const inputYear = "1993";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// NaN means invalid number
console.log(Number("Dan"));
console.log(typeof NaN);

console.log(String(30), 30);

// Type coercion
console.log(`I'm 29 years old.`);
console.log("23" + "10" + 3); // When + operator is involved, coercion is done to string
console.log("23" - "10" - 3); // When - operator is involved, coercion is done to number
console.log("23" * "23"); // When * operator is involved, coercion is done to number

let n = "1" + 1;
n -= 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
