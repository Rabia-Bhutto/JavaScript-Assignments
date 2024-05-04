// Task# 01: Write a program that takes two numbers & add them in a new variable. Show the result in your browser.
// var num1 = 250;
// var num2 = 50;
// var sum = num1 + num2;
// document.write("<p>The sum of " + num1 + " and " + num2 + " is " + sum + "</p>");


// Task# 02: Repeat task1 for subtraction, multiplication, division & modulus.
// var num1 = 250;
// var num2 = 50;
// var sum = num1 - num2;
// document.write("<p>The difference of " + num1 + " and " + num2 + " is " + sum + "</p>");

// var num1 = 250;
// var num2 = 50;
// var sum = num1 * num2;
// document.write("<p>The product of " + num1 + " and " + num2 + " is " + sum + "</p>");

// var num1 = 250;
// var num2 = 50;
// var sum = num1 / num2;
// document.write("<p>The division of " + num1 + " and " + num2 + " is " + sum + "</p>");

// var num1 = 250;
// var num2 = 50;
// var sum = num1 % num2;
// document.write("<p>The modulus of " + num1 + " and " + num2 + " is " + sum + "</p>");

// Task# 03: Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// var myVariable;
// document.write("<p>The value after variable declaration is " + myVariable + "</p>");
// myVariable = 10;
// document.write("<p>Initial value: " + myVariable + "</p>");
// myVariable = ++myVariable;
// document.write("<p>The value after increment is: " + myVariable + "</p>");
// myVariable = 7 + myVariable;
// document.write("<p>The value after addition is: " + myVariable + "</p>");
// myVariable = --myVariable;
// document.write("<p>The value after decrement is: " + myVariable + "</p>");
// myVariable = myVariable % 3;
// document.write("<p>The remainder is: " + myVariable + "</p>");

// Task# 04: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// var cost = 600;
// var quantity = 5;
// var totalCost = quantity * cost;
// document.write("<p>The total cost to buy " + quantity + " tickets to a movie is " + totalCost + " PKR." + "</p>");

// Task# 05: Write a script to display multiplication table of any number in your browser.
//   function displayMultiplicationTable(number) {
//     document.write("<h2>Multiplication Table of " + number + "</h2>");
//     document.write("<table border='1'>");
//     for (var i = 1; i <= 10; i++) {
//       document.write("<tr>");
//       document.write("<td>" + number + " x " + i + "</td>");
//       document.write("<td>=</td>");
//       document.write("<td>" + (number * i) + "</td>");
//       document.write("</tr>");
//     }
//     document.write("</table>");
//   }
//   displayMultiplicationTable(7); 


// Task# 06: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsiusTemp = 20;
// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write("<p>" + celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "</p>");
// var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
// document.write("<p>" + fahrenheitTemp + "°F is " + celsiusTemp + "°C" + "</p>");

//Task# 07: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var price1 = 1200;
// var price2 = 2300;
// var quant1 = 1;
// var quant2 = 3;
// var shipCharges = 135;
// var total = (price1 * quant1) + (price2 + quant2) + shipCharges;
// document.write("<p>Price of item 1: " + price1 + " PKR" + "</p>");
// document.write("<p>Ordered quantity of item 1: " + quant1 + "</p>");
// document.write("<p>Price of item 2: " + price2 + " PKR" + "</p>");
// document.write("<p>Ordered Quantity of item 2: " + quant2 + "</p>");
// document.write("<p>Shipping charges: " + shipCharges + " PKR" + "</p>");
// document.write("<p>Total cost of your order is: " + total + " PKR" + "</p>");

//Task# 08: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
// var totalMarks = 1100;
// var obtMarks = 895;
// var percentage = obtMarks/totalMarks * 100;
// document.write("<p>Total marks: " + totalMarks + "</p>");
// document.write("<p>Obtained marks: " + obtMarks + "</p>");
// document.write("<p>Percentage: " + percentage + "</p>");


//Task# 09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// var usd = 10;
// var saudiRiyal = 25;
// var usd_Pkr = usd * 104.80;
// var saudiRiyal_Pkr = saudiRiyal * 28;
// var totalAmount = usd_Pkr + saudiRiyal_Pkr;
// document.write("<p>Total currency in PKR: " + totalAmount + "</p>");

//Task# 10: Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression
// var num = 10;
// var A = num + 5;
// var B = A * 10;
// var C = B/2;
// document.write("<p>Total: " + C + "</p>");

//Task# 11: The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
// var currentYear = 2024;
// var birthYear = 2003;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("<p>Your age is either " + age1 + " or " + age2 + "</p>");

//Task# 12: The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// c. Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2 π = 3.142)
// var r = 5;
// var circumference = 2 * 3.142 * r;
// var area = 3.142 * (r*r);
// document.write("<p>The radius of the circle is: " + r + "</p>");
// document.write("<p>The circumference of the circle is: " + circumference + "</p>");
// document.write("<p>The area of the circle is: " + area + "</p>");

//Task# 13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// var favSnack = "Oreos";
// currentAge = 21;
// maxAge = 50;
// amountPerDay = 5;
// var yearsRemaining = maxAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var totalSnacksNeeded = daysRemaining * amountPerDay;
// document.write("<p>You will need " + totalSnacksNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge + ".</p>");