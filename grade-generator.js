function gradeGenerator(score) {
    // Function to calculate user grade based on test scores (0-100)
    if (score >= 80) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 49) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else if (score < 40) {
        return "E";
    } 
    else {
        return "Invalid mark. Please enter a value between 0 and 100!";
    }
  }
  
// Get user input for their test score
const prompt = require('prompt-sync')({ sigint: true });
const score = parseInt(prompt("Enter student test score (0-100): "));
  
// Fetch and print the grade
const grade = gradeGenerator(score);
console.log(grade);
  