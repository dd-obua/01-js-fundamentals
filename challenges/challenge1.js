// Case 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
  console.log("Mark has a higher BMI than John");
} else {
  console.log("Mark has a lower BMI than John");
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
  console.log("Mark has a higher BMI than John");
} else {
  console.log("Mark has a lower BMI than John");
}
