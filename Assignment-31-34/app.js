//Task# 01: Write a program that displays current date and time in your browser.

// var today = new Date();
// document.write(today);


//Task# 02: Write a program that alerts the current month in words. For example December.

// var today = new Date();
// var month = today.getMonth();
// var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = "";
// for (var i = 0; i < monthArr.length; i++){
//     if (month === i){
//         currentMonth = monthArr[i];
//         break;
//     }
// }
// alert(currentMonth);


//Task# 03: Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var today = new Date();
// var day = today.getDay();
// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = "";
// for (var i = 0; i < dayArr.length; i++){
//     if (day === i){
//         currentDay = dayArr[i];
//         break;
//     }
// }
// alert(currentDay);


//Task# 04: Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var today = new Date();
// var day = today.getDay();
// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = "";

// for (var i = 0; i < dayArr.length; i++) {
//     if (day === i) {
//         currentDay = dayArr[i];
//         break;
//     }
// }

// if (currentDay === "Sat" || currentDay === "Sun") {
//     alert("It's Fun Day!");
// } else {
//     alert("Today is " + currentDay);
// }


//Task# 05: Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var today = new Date();
// var date = today.getDate();
// if (date <= 15){
//     alert("First Fifteen days of the month!");
// }
// else{
//     alert("Last days of the month!");
// }


//Task# 06: Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var today = new Date();
// var milliSecs = today.getTime();
// var mins = milliSecs/ (1000 * 60 * 60);
// console.log("Current Date: " + today);
// console.log("Elapsed milliseconds since January 1, 1970: " + milliSecs);
// console.log("Elapsed minutes since January 1, 1970: " + mins);


//Task# 07: Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var today = new Date();
// var format = today.getHours();
// var diff = format - 12;
// if (diff > 0){
//     alert("Its PM!");
// }
// else{
//     alert("It's AM!");
// }


//Task# 08: Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date(2020, 11, 31);
// alert("Later Date:" + laterDate); 


//Task# 09: Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015.

// var comingRamadan = new Date(2025, 1, 28);
// var firstRamadan = new Date(2015, 5, 18);
// var msRam1 = comingRamadan.getTime();
// var msRam2 = firstRamadan.getTime();
// var msDiff = msRam1 - msRam2;
// var calc = msDiff/(1000 * 60 * 60 * 24);
// daysPast = Math.floor(calc);
// document.write(daysPast + " days have passed since 1st Ramadan, 2015");


//Task# 10: Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var refDate = new Date();
// var setDate = new Date (2015, 0, 1);
// var msRef = refDate.getTime();
// var msSet = setDate.getTime();
// var diff = msRef - msSet;
// calc = diff / (1000 * 60);
// var pastSecs = Math.floor(calc);
// document.write("On reference date " + refDate + ", " + pastSecs + " seconds have passed since the beginning of 2015");


//Task# 11: Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var today = new Date();
// var currentHr = today.getHours();
// today.setHours(currentHr + 1);
// document.write("The date and time one hour ahead is: " + today);


//Task# 12: Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var today = new Date();
// var year = today.getFullYear();
// today.setFullYear(year - 100);
// alert("The date 100 years back was: " + today.toDateString());


//Task# 13: Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var userAge = prompt("Enter your age:");
// userAge = Number(userAge);

// if (!isNaN(userAge) && userAge > 0) {
//     var today = new Date();
//     var year = today.getFullYear();
//     var birthYear = year - userAge; // Corrected variable name

//     alert("You were born in the year: " + birthYear);
// } else {
//     alert("Please enter a valid age.");
// }


//Task# 14: Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,

// var userName = "ABC Customer";
// var month = new Date().getMonth();
// var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = "";
// for (var i = 0; i < monthArr.length; i++){
//     if (month === i){
//         currentMonth = monthArr[i];
//         break;
//     }
// }
// var units = 410;
// var charges = 16;
// var amountPayable = units * charges;
// var lateCharges = 350;
// var grossAmount = amountPayable + lateCharges;
// document.write("<h1>K-ELECTRIC BILL</h1>");
// document.write("<p>Customer Name: " + userName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>Number of units: " + units + "</p>");
// document.write("<p>Charges per unit: " + charges + "</p>");
// document.write("<p>Net Amount Paybale (within Due Date) " + amountPayable + "</p>");
// document.write("<p>Late payment surcharge: " + lateCharges + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmount + "</p>");