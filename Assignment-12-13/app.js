// Task# 01: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var userInput;
// userInput = prompt('Enter a character:');
//  if (!isNaN(userInput)) {
//     /* Number */
//      console.log(userInput + ' is a number.');
// }else if (userInput >= 'A' && userInput <= 'Z') {
//     /*  Uppercase  */
//     console.log(userInput + ' is an uppercase letter.');
//  }else if (userInput >= 'a' && userInput <= 'z') {
//    /* Lowercase */
//     console.log(userInput + ' is a lowercase letter.');
// }else {
//      console.log(userInput + ' is not a valid character.');
//  }


// Task# 02: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

//  var firstNum, secondNum;
//  firstNum = +prompt("Enter the first number:"); 
//  secondNum = +prompt("Enter the second number:");
//  if (firstNum > secondNum){
//     alert(firstNum + " is greater than " + secondNum + " .");
//  }
//  else if (firstNum < secondNum){
//     alert(secondNum + " is greater than " + firstNum + " .");
//  }
//  else if (firstNum === secondNum){
//     alert(secondNum + " and " + firstNum + " are equal. ");
//  }


// Task# 03: Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var userInput;
// userInput = +prompt("Enter a number:");
// if (userInput === 0){
//     alert("You have entered zero");
// }
// else if (userInput > 0){
//     alert("You have entered a positive number");
// }
// else if (userInput < 0){
//     alert("You have entered a negative number");
// }


// Task# 04: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// var input;
// input = prompt("Enter a letter:");
//   // Check if the input is a single character
//   if (input.length !== 1) {
//     alert("false");
// }
// // Check if the character is a vowel
// if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u' || input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U') {
//     alert("true");
// } else {
//     alert("false");
// }


// Task# 05: Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// var password = "bhutto11353", userPassword;
// userPassword = prompt ("Enter your password:");
// if (!userPassword){
//     alert("Please enter your password");
// }
// else
//     if (userPassword === password){
//         alert("Correct! The password you entered matches the original password");
//     }
//     else if (userPassword !== password){
//         alert("Incorrect password");
//     }


// Task# 06: This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting);


// Task# 07: Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.

//    // Function to prompt user and determine greeting based on time
// function getGreetingBasedOnTime() {
//     // Prompt user to enter time in 24-hour format
//     let time24 = prompt("Please enter time in 24-hour format (e.g., 1900 for 7:00 PM):");

//     // Parse the input as an integer
//     time24 = parseInt(time24);

//     // Validate the input
//     if (isNaN(time24) || time24 < 0 || time24 > 2359 || (time24 % 100) >= 60) {
//         alert("Invalid time format. Please enter a valid time in HHMM format (e.g., 0930, 1730).");
//         return;
//     }

//     // Extract hours and minutes from the input
//     let hours24 = Math.floor(time24 / 100);
//     let minutes = time24 % 100;

//     // Initialize variables for 12-hour format
//     let period = "";
//     let hours12 = hours24;

//     // Determine AM/PM period and adjust hours for 12-hour format
//     if (hours24 === 0) {
//         // Midnight case
//         period = "AM";
//         hours12 = 12;
//     } else if (hours24 > 0 && hours24 < 12) {
//         // AM period
//         period = "AM";
//     } else if (hours24 === 12) {
//         // Noon case
//         period = "PM";
//     } else if (hours24 > 12 && hours24 < 24) {
//         // PM period
//         period = "PM";
//         hours12 = hours24 - 12;
//     } else {
//         // Invalid case, should never be hit due to earlier validation
//         alert("Invalid time.");
//         return;
//     }

//     // Format minutes to always be two digits
//     minutes = minutes < 10 ? "0" + minutes : minutes;

//     // Determine greeting based on time
//     if (hours24 >= 0 && hours24 < 1200) {
//         alert("Good Morning!");
//     } else if (hours24 >= 1200 && hours24 < 1700) {
//         alert("Good Afternoon!");
//     } else if (hours24 >= 1700 && hours24 < 2100) {
//         alert("Good Evening!");
//     } else if (hours24 >= 2100 && hours24 <= 2359) {
//         alert("Good Night!");
//     }

//     // Display the converted time in 12-hour format for confirmation
//     alert("The time in 12-hour format is: " + hours12 + ":" + minutes + " " + period);
// }

// // Call the function to execute
// getGreetingBasedOnTime();
