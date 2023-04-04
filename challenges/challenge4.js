// Converting the switch construct into an if-else structure
const day = "Monday";

console.log(`Using switch statement`);
console.log(`----------------------`);
switch (day) {
  case "Monday":
    console.log(`Plan course struture.`);
    console.log(`Go to coding meetup.`);
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples.");
    break;
  case "Friday":
    console.log(`Record videos.`);
    break;
  case "Saturday":
  case "Sunday":
    console.log(`Enjoy the weekend.`);
    break;
  default:
    console.log(`Not a valid day.`);
}

console.log();
console.log(`Using if-else`);
console.log(`----------------------`);

if (day === "Monday") {
  console.log(`Plan course struture.`);
  console.log(`Go to coding meetup.`);
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples.");
} else if (day === "Friday") {
  console.log(`Record videos.`);
} else if (day === "Saturday" || day === "Sunday") {
  console.log(`Enjoy the weekend.`);
} else {
  console.log(`Not a valid day.`);
}
