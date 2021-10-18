(function () {
    function returnSeven() {
        return 7;
    }
console.log(returnSeven())


if(false) {
    console.log("Am I Seen?");
} else {
    console.log("What about me?");
}
})();

var hadBreakfast = Boolean(Math.round(Math.random()));


var hadBreakfast = (hadBreakfast) ? "I ate a bowl of cereal" : "I need to get some food";

console.log(hadBreakfast);

// Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"
 function typeCheck (input) {
     if (typeof input === 'string') {
         return ("Haha, it\'s a string of a string");
     }else {
     return typeof input;
     }
 }

typeCheck('')
typeCheck(isNaN());
typeCheck(!false * 3);
typeCheck(4 + '4');
