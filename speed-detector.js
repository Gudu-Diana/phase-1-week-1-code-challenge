function demeritCalculator(carSpeed) {
    // a function that calculates demerit points for overspeeding
        return Math.floor((carSpeed - 70) / 5);
    }

// Prompt user for speed
const prompt = require('prompt-sync')({ sigint: true });
const carSpeed = parseInt(prompt("Enter the speed of the car: "));

//Fetch and print result
const demeritScore = demeritCalculator(carSpeed);
if (demeritScore > 12) {
    console.log("License suspended");
} else {
    console.log("Your demerit points are:", demeritScore);
}