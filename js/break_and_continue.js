"use strict";

(function() {

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

    var userNumber = Number(prompt("give me an odd number between 1 and 50?"))
    console.log("Number to skip is " + userNumber);

    for (var i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            // console.log("We are skipping " + i);
            continue;
        }
        if (userNumber === i) {
            console.log("Yikes! Skipping " + userNumber);
        } else {
            console.log("Here's an odd number: " + i);
        }
        if (i >= 49) {
            break;
        }
    }
})();