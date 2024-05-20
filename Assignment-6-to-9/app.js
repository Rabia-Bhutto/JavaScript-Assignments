// Task# 01: Write a program to take a number in a variable, do the required arithmetic operations to display the given result in your browser:

//  var a = 10;
 
//  document.write("Result:<br> The value of a is:10");

//  ++a;
//  document.write("<br>The value of ++a is :11 <br> Now the value of ++a is :11")

//  ++a;


//  document.write("<br>The value of ++a is :11 <br> Now the value of ++a is :12");
// --a;
// document.write("<br>The value of --a is :11 <br> Now the value of --a is :11");

// --a;
// document.write("<br>The value of --a is :11 <br> Now the value of --a is :10");


// // Task# 02: What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// document.write("<p>The value of a is: " + a + "</p>");
// document.write("<p>The value of b is: " + b + "</p>");
// var result = --a - --b + ++b + b--;
// // --a = 1
// // --a - --b = 1-0 = 1
// // --a - --b + ++b = 1-0+1 = 1+1 = 2
// // --a - --b + ++b + b-- = 1-0+1+1 = 1+1+1 = 3
// document.write("<p>The result is: " + result + "</p>");


// Task# 03: Write a program that takes input a name from user & greet the user.

// var userName = prompt("Enter your name");
// document.write("<p>Hello, " + userName + "! Welcome to my Portfolio.");

// Task# 04: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var tableNum = +prompt("Enter a number for the multiplication table (default is 5):") || 5;
// var counter = 1;
// var incre = 1;

// document.write(tableNum + " x " + counter + " = " + tableNum * incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>" +
//     tableNum + " x " + ++counter + " = " + tableNum * ++incre + "<br>");


// Task# 05: Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// var sub1 = prompt("Enter the first subject:");
// var sub1ObtMarks = +prompt("Enter the obtained marks of " + sub1 + ":");
// var sub2 = prompt("Enter the second subject:");
// var sub2ObtMarks = +prompt("Enter the obtained marks of " + sub2 + ":");
// var sub3 = prompt("Enter the third subject:");
// var sub3ObtMarks = +prompt("Enter the obtained marks of " + sub3 + ":");
// var totalObtMarks = sub1ObtMarks + sub2ObtMarks + sub3ObtMarks;

// var maxMarks = 100;
// var totalMarks = maxMarks * 3;

// var percentageSub1 = (sub1ObtMarks / maxMarks) * 100;
// var percentageSub2 = (sub2ObtMarks / maxMarks) * 100;
// var percentageSub3 = (sub3ObtMarks / maxMarks) * 100;
// var totalPercentage = ((percentageSub1 + percentageSub2 + percentageSub3) / 3);

// document.write("<table border='1'>");
// document.write("<tr>");
// document.write("<td>SUBJECT</td>");
// document.write("<td>OBTAINED MARKS</td>");
// document.write("<td>TOTAL MARKS</td>");
// document.write("<td>PERCENTAGE</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub1 + "</td>");
// document.write("<td>" + sub1ObtMarks + "</td>");
// document.write("<td>" + maxMarks + "</td>");
// document.write("<td>" + percentageSub1.toFixed(2) + " %</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub2 + "</td>");
// document.write("<td>" + sub2ObtMarks + "</td>");
// document.write("<td>" + maxMarks + "</td>");
// document.write("<td>" + percentageSub2.toFixed(2) + " %</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub3 + "</td>");
// document.write("<td>" + sub3ObtMarks + "</td>");
// document.write("<td>" + maxMarks + "</td>");
// document.write("<td>" + percentageSub3.toFixed(2) + " %</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td> </td>");
// document.write("<td>" + totalObtMarks + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + totalPercentage.toFixed(2) + " %</td>");
// document.write("</tr>");
// document.write("</table>");

