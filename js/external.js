"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");
console.log("Welcome to my Website!");

var userFavoriteColor = prompt("What is your favorite color?");
alert("Awesome! " + userFavoriteColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaid = prompt("How many days are you renting little mermaid?");
console.log("3");
var brotherBear = prompt("How many days are you renting Brother Bear?");
console.log("5");
var hercules = prompt("How many days are you renting Hercules?");
console.log("1");
var pricePerDay = 3;

var totalPrice = littleMermaid * pricePerDay+ brotherBear * pricePerDay + hercules* pricePerDay;
alert("Your total is $" + totalPrice + "!");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRatePerHour = prompt("What is your hourly rate at Google?");
console.log("400");
var amazonRatePerHour = prompt("What is your hourly rate at Amazon?");
console.log("380");
var facebookRatePerHour = prompt("What is your hourly rate at Facebook?");
console.log("350");

var googleHours = prompt("How many hours did you work this week at Google?");
console.log("6");
var amazonHours = prompt("How many hours did you work this week at Amazon?");
console.log("4");
var facebookHours = prompt("How many hours did you work this week at Facebook?");
console.log("10");

let totalPay = googleRatePerHour * googleHours + amazonRatePerHour * amazonHours + facebookRatePerHour * facebookHours;
alert("Your paycheck this week is $ " + totalPay + "!");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classFull = confirm("Is the class full?");
var scheduleConflict =confirm("Does it conflict with your schedule?");

var canEnroll =!classFull && !scheduleConflict;

if(canEnroll) {
    alert("Congratulations! Welcome to your new class!");
} else {
    alert("Sorry! Registration closed!");
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var itemsPurchased = confirm("Did you purchase more than 2 items?");
var premiumMember= confirm("Are you a Premium member?");
var offerExpired= confirm("Has the offer expired?");

var productOffer =(itemsPurchased > 2 || premiumMember) && offerExpired;

if(productOffer) {
    alert ("Great! offer applied!");
}else {
    alert("Sorry,cannot apply offer!");
}









