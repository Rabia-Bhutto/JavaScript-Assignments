// Task# 01: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var userFirstName = prompt("Enter your first name:");
// var slice1 = userFirstName.slice(0, 1);
// var slice2 = userFirstName.slice(1);
// firstName = slice1.toUpperCase() + slice2.toLowerCase();
// console.log(firstName);
// var userLastName = prompt("Enter your lats name:");
// var slice3 = userLastName.slice(0, 1);
// var slice4 = userLastName.slice(1);
// lastName = slice3.toUpperCase() + slice4.toLowerCase();
// alert("Welcome, " + firstName + " " + lastName + "!");


// Task# 02: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var favPhone = prompt("What's your favorite phone?");
// var strLength = favPhone.length;
// document.write("<p>My favorite phone is: " + favPhone + "</p>");
// document.write("<p>Length of the string: " + strLength + "</p>");


// Task# 03: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var str = "Pakistani";
// var index = str.indexOf("n");
// document.write("<p>String: " + str + "</p>");
// document.write("<p>Index of 'n': " + index + "</p>");


// Task# 04: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var index = str.lastIndexOf("l");
// document.write("<p>String: " + str + "</p>");
// document.write("<p>Last index of 'l': " + index + "</p>");


// Task# 05: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
// var index = str.charAt(3);
// document.write("<p>String: " + str + "</p>");
// document.write("<p>Character at the index 3: " + index + "</p>");


// Task# 06: Repeat Q1 using string concat() method.

// var userFirstName = prompt("Enter your first name:");
// var slice1 = userFirstName.slice(0, 1);
// var slice2 = userFirstName.slice(1);
// firstName = slice1.toUpperCase() + slice2.toLowerCase();
// console.log(firstName);
// var userLastName = prompt("Enter your lats name:");
// var slice3 = userLastName.slice(0, 1);
// var slice4 = userLastName.slice(1);
// lastName = slice3.toUpperCase() + slice4.toLowerCase();
// str1 = "Welcome, ";
// str2 = " ";
// str3 = " !";
// name = str1.concat(firstName, str2, lastName, str3);
// alert(name);


// Task# 07: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// city = "Hyderabad";
// newCity = city.replace("Hyder", "Islam");
// document.write("<p>City: " + city + "</p>");
// document.write("<p>After replacement: " + newCity + "</p>");

// Task# 08: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// "var message = “Ali and Sami are best friends. They play cricket and
// football together.”;"

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// newMessage = message.replaceAll("and", "&");
// document.write("<p>Original message: " + message + "</p>");
// document.write("<p>After replacement: " + newMessage + "</p>");

// Task# 09: Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// var type1 = typeof str;
// console.log(type1)
// var num = parseInt(str);
// var type2 = typeof num;
// document.write("<p>Value: " + str + "</p>");
// document.write("<p>Data type: " + type1 + "</p>");
// document.write("<p>Value: " + num + "</p>");
// document.write("<p>Data type: " + type2 + "</p>");


// Task# 10: Write a program that takes user input. Convert and show the input in capital letters.

//  var userInput = prompt("What's your favorite fruit?");
//  var upCase = userInput.toUpperCase();
// document.write("<p>" + upCase + "</p>");


// Task# 11: Write a program that takes user input. Convert and show the input in title case.

// var userinput = prompt("Write a word:");
// var firstChar = userinput.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var remainingChar = userinput.slice(1);
// remainingChar = remainingChar.toLowerCase();
// document.write(firstChar.concat(remainingChar));


// Task# 12: Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var numStr = num.toString();
// var numStr = numStr.replace(".", "");
// document.write("<p>Number: " + num + "</p>");
// document.write("<p>String: " + numStr + "</p>");


// Task# 13: Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Enter your username:");
// for (var i = 0; i < userName.length; i++){
//     charCode = userName.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64){
//         alert("You've entered an invalid username!");
//     }
// }


// Task# 14: 