"use strict";

(function () {

// Create a while loop that uses console.log() to create the output shown below.
    var i = 1;
    while (i < 65536) {
        i = i * 2;
        console.log(i);
    }

// An ice cream seller can't go home until she sells all of her cones. ' +
// 'First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. ' +
// 'Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. ' +
// 'Use a do-while loop to log to the console the amount of cones sold to each person. '

    var allCones = Math.floor(Math.random() * 50) + 5;

    Math.floor(Math.random() * 5) + 1;

})();