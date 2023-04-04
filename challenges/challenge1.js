// Case 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

// Case 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

const markHigherBMI2 = bmiMark2 > bmiJohn2;

if (markHigherBMI2) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
