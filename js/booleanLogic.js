// Logical operators

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision) {
  console.log(`Sarah is able to drive.`);
} else {
  console.log(`Someone else should drive.`);
}

const isTired = true;
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log(`Sarah is the one going to drive.`);
} else {
  console.log(`Someone else is going to drive.`);
}
