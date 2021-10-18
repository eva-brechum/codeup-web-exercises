// Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for (var i = 1; i<= 10; i++) {
        console.log(num+ "x" + i + "=" + (num*i));
    }
    }
showMultiplicationTable(7);
