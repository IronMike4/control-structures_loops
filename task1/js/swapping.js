/* This is the swapping.js file that asks for user input then swaps the second digit and the last digit.
If a user enters input that is not a number or has less than 3 digits, the program will continually prompt the user until they enter a valid number.
I tried to use a combination of all loops that we learnt about in the control structures lesson.
To enable me to manipulate the individual digits of the number I had to convert it to a string.For this I had to read the following links:
 - https://www.w3schools.com/jsref/jsref_tostring_number.asp
 - https://www.w3schools.com/jsref/prop_doc_body.asp
 - https://www.w3schools.com/jsref/jsref_isnan_number.asp
For more information about this please visit https://github.com/IronMike4/control-structures_loops */

// Declaring variables to store the number and the swapped number as a string
let numberString;
let swappedNumber = "";

// Prompting the user for a number with at least 3 digits
do {
  const number = prompt("Please enter a valid number with at least 3 digits:");

  // Checking if the user input is a number and has at least 3 digits
  if (!isNaN(number) && number >= 100) {
    numberString = number.toString();
  }
} while (
  // Continuing to prompt the user until a valid number with at least 3 digits is entered
  !numberString
);

// Swapping the second digit and the last digit using a for loop
const length = numberString.length;
const secondDigit = numberString[1];
const lastDigit = numberString[length - 1];

for (let i = 0; i < length; i++) {
  if (i === 1) {
    swappedNumber += lastDigit;
  } else if (i === length - 1) {
    swappedNumber += secondDigit;
  } else {
    swappedNumber += numberString[i];
  }
}

// Displaying the original number and the new number on the HTML document
document.body.innerHTML = `<p>Original number: ${numberString}</p>`;
document.body.innerHTML += `<p>New number after swapping: ${swappedNumber}</p>`;
