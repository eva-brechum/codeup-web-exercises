// (function () {
//     function returnSeven() {
//         return 7;
//     }
// console.log(returnSeven())
//
//
// if(false) {
//     console.log("Am I Seen?");
// } else {
//     console.log("What about me?");
// }
// })();
//
// var hadBreakfast = Boolean(Math.round(Math.random()));
//
//
// var hadBreakfast = (hadBreakfast) ? "I ate a bowl of cereal" : "I need to get some food";
//
// console.log(hadBreakfast);
//
// // Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"
//  function typeCheck (input) {
//      if (typeof input === 'string') {
//          return ("Haha, it\'s a string of a string");
//      }else {
//      return typeof input;
//      }
//  }
//
// typeCheck('')
// typeCheck(isNaN());
// typeCheck(!false * 3);
// typeCheck(4 + '4');

// Write a program that console.logs the numbers from 1 to 100.
// But for multiples of three console.log “Fizz” instead of the number and for the multiples of five console.log “Buzz”.
// For numbers which are multiples of both three and five console.log “FizzBuzz”.
//  for(var i = 1;  i <=100; i++) {
//      let output = "";
//      if(i % 3 === 0 && i % 5===0){
//          output += "Fizzbuzz";
//      }else if (i % 3 === 0) {
//          output += "Fizz";
//      }else if (i % 5 === 0) {
//          output += "Buzz";
//      }else {
//          output = i;
//      }
//      console.log(output);
//  }

// function secondToLast(arr){
//      return arr[arr.length -2];
// }
// console.log(secondToLast(["first", "second", "third", "last"])
//

// Write a function named 'moveToEnd' that takes in an array,
// and returns the array with the original first index moved to the last index of the array.
//
//     Example:
// moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
// moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll'];

function moveToEnd (arr) {
     return arr.push[0];
}
console.log(moveToEnd.push[0]);

// Jay's Walkthrough
// function moveToEnd(arr) {
//      var removeElement = arr.shift();
//      arr.push(removeElement);
//      return arr;
// }
//
// console.log(moveToEnd([1,2,3]));

var Charmander= [
    {
         name: "Charmander",
     category: "Lizard",
         type: "Fire",
         weakness: ["water", "ground", "rock"]
}
]