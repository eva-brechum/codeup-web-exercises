"use strict";
(function() {


// Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

    function showMultiplicationTable(num) {
        for (var i = 1; i <= 10; i++) {
            console.log(num + " x " + i + " = " + (num * i));
        }
    }
    showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between
// 20 and 200 and output to the console whether each number is odd or even.

    for (var h = 1; h <= 10; h++) {
        var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even")
        } else {
            console.log(randomNumber + " is odd");
        }
    }


// Create a for loop that uses console.log to create the output shown below.
        for (var x = 1; x < 10; x++) {
            console.log(x.toString().repeat(x));
        }

// Create a for loop that uses console.log to create the output shown below.
        for (var j = 100; j >= 5; j -= 5) {
            console.log(j);
        }


})();
