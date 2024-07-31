//Task# 01: Write a function that displays current date & time in your browser.

// function getDate(){
//     var today = new Date();
//     return today;
// }

// var currentDate = getDate();

// alert(currentDate);


//Task# 02: Write a function that takes first & last name and then it greets the user using his full name.

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// function greetingUser(){
//    var slice1 = firstName.slice(0,1).toUpperCase();
//    var slice2 = firstName.slice(1).toLocaleLowerCase();
//    var fName = slice1 + slice2;
//    var slice3 = lastName.slice(0,1).toUpperCase();
//    var slice4 = lastName.slice(1).toLocaleLowerCase();
//    var lName = slice3 + slice4;
//    var userName = fName + " " + lName;
//    return userName;
// }

// var fullName = greetingUser();
// alert("Welcome, " + fullName + " to our website!");


//Task# 03: Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var num1 = prompt("Enter the first number: ");
// num1 = Number(num1);
// var num2 = prompt("Enter the second number: ");
// num2 = Number(num2);

// function calc(){
//     sum = num1 + num2;
//     return sum;
// }

// alert("The sum of " + num1 + " and " + num2 + " is " + calc());


//Task# 04: Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calc(num1, num2, operator){
//     var result;
//     switch (operator){
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;  
//             break;
//         case '*':
//             result = num1 * num2;  
//             break;
//         case '/':
//             if (num2 !== 0){
//                 result = num1 / num2;
//             }
//             else{
//                 return "Error: Division by zero!";
//             }
//             break;
//         default:
//             return "Error: Invalid operator!"
//     }
//     return result;
// }

// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");

// var result = calc(num1, num2, operator);

// alert("The result is: " + result);


//Task# 05: Write a function that squares its argument.

// function squaring(x){
//     return x * x;
// }

// var num = Number(prompt("Enter the number:"));

// var result = squaring(num);

// alert("The square of " + num + " is: " + result);


//Task# 06: Write a function that computes factorial of a number.

// function fact(n){
//     if (n < 0){
//         return "Error: Factorial is not defined for negative numbers.";
//     }
//     if (n === 0 || n === 1){
//         return 1;
//     }
//     return n * fact(n -1);
// }

// var userInput = Number(prompt("Enter a number:"));
// var result = fact(userInput);
// alert("The factorial of " + userInput + " is: " + result);


//Task# 07: Write a function that take start and end number as inputs & display counting in your browser.

// function count(num1, num2){
//     var results = [];
//     for (var i = num1; i <= num2; i++){
//         results.push(i);
//     }
//     return results;
// }

// var num1 = Number(prompt("Enter the starting number:"));
// var num2 = Number(prompt("Enter the ending number:"));
// var output = count(num1, num2); 
// console.log(output);


// Task# 08: Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse() {
//     function calculateSquare(x) {
//         return x * x;
//     }

//     var base = Number(prompt("Enter the base of the triangle:"));
//     var perpendicular = Number(prompt("Enter the perpendicular of the triangle:"));
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);

//     return hypotenuse.toFixed(2);
// }

// var hypotenuse = calculateHypotenuse();
// alert("The hypotenuse of the given triangle is: " + hypotenuse);


// Task# 09: Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// function area(width, height){
//     a = width * height;
//     return a.toFixed(2);
// }

// var width = Number(prompt("Enter the width of the triangle:"));
// var height = Number(prompt("Enter the height of the triangle:"));
// var triArea = area(width, height);
// alert("The area of the given triangle is: " + triArea);


// Task# 10: Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function palindrome(str){
//     var characters = str.split("").reverse().join("");
//     return characters;
// }

// var str = prompt("Enter a word:");
// var reversedWord = palindrome(str);

// if (reversedWord === str){
//     alert(str + " is a palindrome word!");
// }
// else{
//     alert(str + " is not a palindrome word!");
// }


// Task# 11: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function string(str){
//     var slice1 = str.slice(0, 1).toUpperCase();
//     var slice2 = str.slice(1);
//     var upperCase = slice1 + slice2;
//     return upperCase;
// }

// var str = prompt("Enter a string:");
// var capitalizedStr = string(str);
// alert(capitalizedStr);


// Task# 12: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longWord(str){
//     var words = str.split(" ");
//     var longestWord = "";

//     for (var i = 0; i < words.length; i++){
//         if (words[i].length > longestWord.length){
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// var str = prompt("Enter a string:");
// var theWord = longWord(str);
// alert("The longest word is: " + theWord);


// Task# 13: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// function countLetterOccurrences(str, letter) {
//     var count = 0;
    
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage
// var str = prompt("Enter a string:");
// var letter = prompt("Enter a letter to count:");
// var count = countLetterOccurrences(str, letter);
// alert("The letter '" + letter + "' occurs " + count + " times in the string.");


// Task# 14: The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// function calcCircumference(radius){
//     var circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius){
//     var area = Math.PI * Math.pow(radius, 2);
//     alert("The area is " + area.toFixed(2));
// }

// var radius = Number(prompt("Enter the radius of the circle:"));
// calcCircumference(radius);
// calcArea(radius)