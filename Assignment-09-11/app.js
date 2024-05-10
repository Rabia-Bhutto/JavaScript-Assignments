// Task# 01: Write a program to take “city” name as input from user. If user enters “Karachi", welcome the user like this:
// “Welcome to city of lights!”

// var cityName = prompt("Enter the city name");
// if (cityName === "Karachi") {
//     document.write("<h1>Welcome to the city of lights!</h1>");
// }


// Task# 02: Write a program to take “gender” as input from user.If the user is male, give the message: Good Morning, Sir! If the user is female, give the message: Good Morning, Ma’am!

// var userGender = prompt("Enter your gender");
// if (userGender === "Female") {
//     document.write("<p>Good Morning, Ma’am!</p>");
// }
// else if (userGender === "Male") {
//     document.write("<p>Good Morning, Sir!</p>");
// }
// else {
//     document.write("<p>Good Morning!</p>");
// }


// Task# 03: Write a program to take input color of road traffic signal from the user & show the message accordingly.

// var userGender = prompt("Enter the color of a traffic signal:");
// if (userGender === "Red") {
//     document.write("<p>Must stop</p>");
// }
// else if (userGender === "Yellow") {
//     document.write("<p>Ready to move</p>");
// }
// else if (userGender === "Green") {
//     document.write("<p>Move now</p>");
// }
// else {
//     document.write("<p>You've entered an invalid value.</p>");
// }


// Task# 04: Write a program to take input the remaining fuel in a car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car.”

// var carFuel = +prompt("Enter the remaining quantity of fuel in your car (in Litres):");
// if (carFuel < 0.25) {
//     document.write("<p>Please refill the fuel in your car.</p>");
// }
// else {
//     document.write("<p>Keep going. You have enough fuel in the car</p>");
// }


// Task# 05: Run this script, & check whether alert message would be displayed or not. Record the outputs.
// 01.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Ans. In the above code, the alert message will be displayed.

// 02.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Ans. In the above code, the alert message will not be displayed.

// 03.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Ans. In the above code, the 2nd and the 4th alert messages will only be displayed.

// 04.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Ans. In the above code, the alert message will be displayed.

// 05. 
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// Ans. In the above code, the 1st alert message will be displayed.

// 06.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// Ans. In the above code, the alert message will be displayed.


// Task# 06: Write a program to take input the marks obtained in three subjects & total marks. Computee & show the resulting percentage on your page. Take percentage & compute grade as per the given table.

// var engObtMarks = +prompt("Enter the obtained marks of English:");
// var engMaxMarks = +prompt("Enter the total marks of English:");
// var mathObtMarks = +prompt("Enter the obtained marks of Mathematics:");
// var mathMaxMarks = +prompt("Enter the total marks of Mathematics:");
// var phyObtMarks = +prompt("Enter the obtained marks of Physics:");
// var phyMaxMarks = +prompt("Enter the total marks of Physics:");
// var totalObtainedMarks = engObtMarks + mathObtMarks + phyObtMarks;
// var totalMaxMarks = engMaxMarks + mathMaxMarks + phyMaxMarks;
// var percentage = (totalObtainedMarks / totalMaxMarks) * 100;
// var grade;
// var remarks;

// if (percentage >= 80){
//     grade = "A-One";
//     remarks = "Excellent!";
// }
// else if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if (percentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>MARK SHEET</h1>");
// document.write("<p>Total Marks: " + totalMaxMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage + "</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

