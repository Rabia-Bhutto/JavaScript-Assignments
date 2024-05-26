// Task# 01: Declare an empty array using JS literal notation to store student names in future.

// var studentNames = [];


// Task# 02: Declare an empty array using JS object notation to store student names in future.

// var studentNames = new Array();


// Task# 03: Declare and initialize a string's array.

// var stringArray = ["Tamsin" , "Wren" , "Marlena"];

// Task# 04: Declare and initialize a numbers array.

// var numArray = [1 , 45 , 567];


// Task# 05: Declare and initialize a boolean array.

// var boolArray = [true, false, true, false];


// Task# 06: Declare and initialize a mixed array.

// var mixedArray = ["Rabia" , 21 , true];


// Task# 07: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.

// var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL." , "PhD"];
// document.write("<h1>Qualifications:</h1>");
// document.write("<p>1) " + qualifications[0] + "</p>");
// document.write("<p>2) " + qualifications[1] + "</p>");
// document.write("<p>3) " + qualifications[2] + "</p>");
// document.write("<p>4) " + qualifications[3] + "</p>");
// document.write("<p>5) " + qualifications[4] + "</p>");
// document.write("<p>6) " + qualifications[5] + "</p>");
// document.write("<p>7) " + qualifications[6] + "</p>");
// document.write("<p>8) " + qualifications[7] + "</p>");


// Task# 08: Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students.

// var studentNames = ["Michael" , "John" , "Tony"];
// var studentScores = [320 , 230 , 480];
// var studentPercentages = [64 , 46 , 96];
// document.write("<p>The score of " + studentNames[0] + " is " + studentScores[0] + " Percentage: " + studentPercentages[0] + "%</p>");
// document.write("<p>The score of " + studentNames[1] + " is " + studentScores[1] + " Percentage: " + studentPercentages[1] + "%</p>");
// document.write("<p>The score of " + studentNames[2] + " is " + studentScores[2] + " Percentage: " + studentPercentages[2] + "%</p>");


// Task# 09: Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

        // // Initialize the array with color names
        // let colors = ["Red", "Green", "Blue"];

        // // Display the initial array
        // document.write("<h3>Initial Colors in the array:</h3>");
        // document.write("<ul>");
        // for (let i = 0; i < colors.length; i++) {
        //     document.write("<li>" + colors[i] + "</li>");
        // }
        // document.write("</ul>");

        // // a. Ask the user what color to add to the beginning
        // let colorToAddAtBeginning = prompt("Enter a color to add to the beginning of the array:");
        // if (colorToAddAtBeginning) {
        //     colors.unshift(colorToAddAtBeginning);
        //     document.write("<h3>After adding color to the beginning:</h3>");
        //     document.write("<ul>");
        //     for (let i = 0; i < colors.length; i++) {
        //         document.write("<li>" + colors[i] + "</li>");
        //     }
        //     document.write("</ul>");
        // }

        // // b. Ask the user what color to add to the end
        // let colorToAddAtEnd = prompt("Enter a color to add to the end of the array:");
        // if (colorToAddAtEnd) {
        //     colors.push(colorToAddAtEnd);
        //     document.write("<h3>After adding color to the end:</h3>");
        //     document.write("<ul>");
        //     for (let i = 0; i < colors.length; i++) {
        //         document.write("<li>" + colors[i] + "</li>");
        //     }
        //     document.write("</ul>");
        // }

        // // c. Add two more colors to the beginning
        // colors.unshift("Yellow", "Purple");
        // document.write("<h3>After adding two more colors to the beginning:</h3>");
        // document.write("<ul>");
        // for (let i = 0; i < colors.length; i++) {
        //     document.write("<li>" + colors[i] + "</li>");
        // }
        // document.write("</ul>");

        // // d. Delete the first color in the array
        // colors.shift();
        // document.write("<h3>After deleting the first color:</h3>");
        // document.write("<ul>");
        // for (let i = 0; i < colors.length; i++) {
        //     document.write("<li>" + colors[i] + "</li>");
        // }
        // document.write("</ul>");

        // // e. Delete the last color in the array
        // colors.pop();
        // document.write("<h3>After deleting the last color:</h3>");
        // document.write("<ul>");
        // for (let i = 0; i < colors.length; i++) {
        //     document.write("<li>" + colors[i] + "</li>");
        // }
        // document.write("</ul>");

        // // f. Ask the user at which index to add a color
        // let indexToAddColor = prompt("At which index do you want to add a color?");
        // let colorToAddAtIndex = prompt("Enter the color name to add at index " + indexToAddColor + ":");
        // if (indexToAddColor !== null && colorToAddAtIndex) {
        //     indexToAddColor = parseInt(indexToAddColor);
        //     if (indexToAddColor >= 0 && indexToAddColor <= colors.length) {
        //         colors.splice(indexToAddColor, 0, colorToAddAtIndex);
        //         document.write("<h3>After adding color at index " + indexToAddColor + ":</h3>");
        //         document.write("<ul>");
        //         for (let i = 0; i < colors.length; i++) {
        //             document.write("<li>" + colors[i] + "</li>");
        //         }
        //         document.write("</ul>");
        //     } else {
        //         document.write("<h3>Invalid index. No color added.</h3>");
        //     }
        // }

        // // g. Ask the user at which index to delete color(s) and how many colors
        // let indexToDeleteColor = prompt("At which index do you want to delete color(s)?");
        // let numberOfColorsToDelete = prompt("How many colors do you want to delete?");
        // if (indexToDeleteColor !== null && numberOfColorsToDelete !== null) {
        //     indexToDeleteColor = parseInt(indexToDeleteColor);
        //     numberOfColorsToDelete = parseInt(numberOfColorsToDelete);
        //     if (indexToDeleteColor >= 0 && indexToDeleteColor < colors.length && numberOfColorsToDelete > 0) {
        //         colors.splice(indexToDeleteColor, numberOfColorsToDelete);
        //         document.write("<h3>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDeleteColor + ":</h3>");
        //         document.write("<ul>");
        //         for (let i = 0; i < colors.length; i++) {
        //             document.write("<li>" + colors[i] + "</li>");
        //         }
        //         document.write("</ul>");
        //     } else {
        //         document.write("<h3>Invalid index or number of colors. No colors deleted.</h3>");
        //     }
        // }


// Task# 10: // Write a program to store student scores in an array &sort the array in ascending order using Array’s sort method.

// var studentScores = [85, 72, 93, 67, 78];

// // Display the original array
// console.log("Original array of student scores:");
// console.log(studentScores);

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     if (a < b) {
//         return -1; // Return a negative value if a should come before b
//     } else if (a > b) {
//         return 1; // Return a positive value if a should come after b
//     } else {
//         return 0; // Return 0 if a and b are equal
//     }
// });

// // Display the sorted array
// console.log("Sorted array of student scores in ascending order:");
// console.log(studentScores);


// Task# 11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
// document.write("<p>Original array of city names:</p>");
// document.write("<p>" + cities + "</p>");
// var selectedCities = [cities[0] , cities[2] , cities[4]];
// document.write("<p>Array of selected cities:</p>");
// document.write("<p>" + selectedCities + "</p>");


// Task# 12: Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This" , "is" , "my", "cat"];
// document.write("<p>Array:</p>");
// document.write("<p>" + arr + "</p>");
// var singleString = arr.join(" ");
// document.write("<p>String:</p>");
// document.write("<p>" + singleString + "</p>");


// Task# 13: Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var arr = ["Code" , "Eat" , "Sleep" , "Repeat"];
// var firstValue = arr.shift();
// document.write("<p>First value: " +  firstValue + "</p>");
// var secondValue = arr.shift();
// document.write("<p>First value: " +  secondValue + "</p>");
// var thirdValue = arr.shift();
// document.write("<p>First value: " +  thirdValue + "</p>");
// var fourthValue = arr.shift();
// document.write("<p>First value: " +  fourthValue + "</p>");


// Task# 14: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// // Create an empty array to store values
// let lifoArray = [];

// // Add values to the array (push operation)
// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");

// // Access and remove values from the array in LIFO order (pop operation)
// let lastValue = lifoArray.pop();
// console.log("Last value:", lastValue);

// let secondLastValue = lifoArray.pop();
// console.log("Second last value:", secondLastValue);

// let thirdLastValue = lifoArray.pop();
// console.log("Third last value:", thirdLastValue);



// Task# 15: Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// // Array of phone manufacturers
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start building the HTML string for the dropdown/select menu
// let dropdownHTML = "<select>";

// // Loop through the array of manufacturers to create options
// for (let i = 0; i < manufacturers.length; i++) {
//     dropdownHTML += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
// }

// // Close the select tag
// dropdownHTML += "</select>";

// // Display the dropdown/select menu in the browser
// document.write(dropdownHTML);

