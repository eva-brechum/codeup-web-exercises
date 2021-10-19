// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// var userNumber= Number(prompt("what is your number?"))
// for(var x =1; x<50; x++){
//     if(userNumber==x) {
//         console.log("Number to skip is " + userNumber);
//
//     }
//     if(x % 2 == 0 ){
//     }
//         console.log("Yikes! S")
//     }
//     if(x%2!== 0){
//         console.log("here's odd number")
// }
var userNumber = Number(prompt("give me an odd number between 1 and 50?"))
console.log("Number to skip is " + userNumber);


  for(var i = 1; i<50; i++) {
      if (i % 2 === 0) {
          // console.log("We are skipping " + i);
          continue;
      }
      if (userNumber === i) {
          console.log("Yikes! Skipping " + userNumber);
      }else{
          console.log("Here's an odd number: " + i);
  }
          if (i >=49){
              break;
          }
  }