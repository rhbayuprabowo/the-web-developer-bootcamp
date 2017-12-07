var age = Number(prompt("Input your age : "));
console.log(Math.sqrt(age) * Math.sqrt(age) === age)
if (age < 0) {
    console.log("Please don't input negative age :)");
} else if (age === 21) {
    console.log("Happy 21st birthday");
} else if (age % Math.sqrt(age) === 0) {
    console.log("Your age is perfect square! Awesome!");
} else if (age % 2 === 1) {
    console.log("Your age is odd!!!")
}  else {
    console.log(age);
}