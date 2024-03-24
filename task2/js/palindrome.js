/* This is the palindrome.js file that asks for user input then checks if the input is a palindrome.
Before checking if the word is a palindrome I first had to clean the word by removing non-alphanumeric characters and converting it to lowercase to avoid case sensitivity.
The following links helped me with this:
 - https://dev.to/chideracode/mastering-palindromes-in-javascript-a-comprehensive-guide-for-coders-1ain
 - https://www.w3schools.com/jsref/jsref_tostring_number.asp
 - https://www.w3schools.com/jsref/jsref_tolowercase.asp
 - https://www.w3schools.com/jsref/prop_doc_body.asp
For more information about this please visit https://github.com/IronMike4/control-structures_loops */

// Prompting the user to enter a word
const userInput = prompt("Enter a word:");

// Cleaning the word by removing non-alphanumeric characters and converting it to lowercase to avoid case sensitivity
const cleanedWord = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

// Declaring and initializing variables to check for palindrome
let isPalindrome = true;
let firstIndex = 0;
let lastIndex = cleanedWord.length - 1;

// Checking if the word is a palindrome using a while loop
while (firstIndex < lastIndex) {
  if (cleanedWord[firstIndex] !== cleanedWord[lastIndex]) {
    isPalindrome = false;
    break;
  }
  firstIndex++;
  lastIndex--;
}

// Concatenating the string to display the output message using the ternary operator
const output = isPalindrome
  ? `${cleanedWord} is a palindrome.`
  : `${cleanedWord} is not a palindrome.`;

// Displaying the output on the HTML document
document.body.innerHTML = `<h2>Palindrome Checker</h2><p>${output}</p>`;
