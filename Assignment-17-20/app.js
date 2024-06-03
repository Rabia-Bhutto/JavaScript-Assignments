// Task# 01: Declare and initialize an empty multidimensional array. (Array of arrays)

// let multiDimArray = [[]]; 


// Task# 02: Declare and initialize a multidimensional array representing the given matrix:

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(matrix);


// Task# 03: Write a program to print numeric counting from 1 to 10.

// var i;
// for (i = 1; i <= 10; i++){
//     console.log(i);
// }


// Task# 04: Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var num = +prompt("Enter a number to show it's multiplication table:");
// var length = +prompt("Enter the length of the multiplication table:");
// var i;


// for (i = 1; i <= length; i++){
//     document.write("<table>");
//     document.write("<tr");
//     document.write("<td>" + num + " x " + i + " = " + (i*num) + "</td>");
//     document.write("</tr"); 
//     document.write("</table>");
// }


// Task# 05: Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var i;
// for (i = 0; i < fruits.length; i++){
//     document.write("<p>" + fruits[i] + "\n</p>");
// }


// Task# 06: Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var i;
// document.write("<h3>Counting:</h3>");
// for (i = 1; i <= 10; i++){
//     if (i < 10) {
//         document.write("<span>" + i + ", </span>");
//     } else {
//         document.write("<span>" + i + "</span>");
//     }
// }

// var j;
// document.write("<h3>Reverse Counting:</h3>");
// for (j = 10; j >= 1; j--){
//     if (j > 1) {
//         document.write("<span>" + j + ", </span>");
//     } else {
//         document.write("<span>" + j + "</span>");
//     }
// }

// var k;
// document.write("<h3>Even Numbers:</h3>");
// for (k = 0; k <= 20; k = k+2){
// if (k < 19) {
//     document.write("<span>" + k + ", </span>");
// } else {
//     document.write("<span>" + k + "</span>");
// }
// }

// var l;
// document.write("<h3>Odd Numbers:</h3>");
// for (l = 1; l <= 20; l = l+2){
//     if (l < 19) {
//         document.write("<span>" + l + ", </span>");
//     } else {
//         document.write("<span>" + l + "</span>");
//     }
// }

// var m;
// document.write("<h3>Series:</h3>");
// for (m = 2; m <= 20; m = m+2){
// //     document.write("<span>" + k + ", </span>");
// if (m < 19) {
//     document.write("<span>" + m + "K, </span>");
// } else {
//     document.write("<span>" + m + "K</span>");
// }
// }


// Task# 07: You have an array:
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// var A = ["cake", "apple pie", "cookies", "chips", "patties"];
// var userInput = prompt("Welcome to The Town's Backers! What do you want to order?").toLowerCase();
// var itemFound = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         itemFound = true;
//         break;
//     }
// }
// if (itemFound) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// }


// Task# 08: Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

// var A = [24, 53, 78,91, 12];
// largest = A[0];
// var i;
// for (i = 0; i < A.length; i++){
//     if (A[i] > largest){
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largest);


// Task# 09: Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78,91, 12];
// smallest = A[0];
// var i;
// for (i = 0; i < A.length; i++){
//     if (A[i] < smallest){
//         smallest = A[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallest);


// Task# 10: Write a program to print multiples of 5 ranging 1 to 100.

// var i;
// for (i = 1; i <= 100; i++){
//     if (i % 5 === 0){
//         console.log(i);
//     }
// }
