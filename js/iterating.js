 "use strict";

    (function() {
        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */
        var names = ["Sam", "James", "Bianca", "River"];
        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */
        var names = ["Sam", "James", "Bianca", "River"];
        console.log(names.length);
        /**
         * TODO:
         * Create log statements that will print each of the names individually by
         * accessing each element's index.
         */
        var names = ["Sam", "James", "Bianca", "River"];
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);

        /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */
        var names = ["Sam", "James", "Bianca", "River"];
        for (var x = 0; x < names.length; x++) {
            console.log("Name at index " + x + " is: " + names[x]);
        }
        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */
        names.forEach(function (names) {
            console.log("The name of this individual is " + names);

        })

        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it
         * - first: returns the first item in the array
         * - second: returns the second item in the array
         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5
         */
            //
            // var arr = [1, 2, 3, 4, 5];
            // var first = arr[0];
            // console.log(first);
            //
            //
            // var arr = [1, 2, 3, 4, 5];
            // var second = arr[1];
            // console.log(second);
            //
            // var arr = [1, 2, 3, 4, 5];
            // var last = arr[4]
            // console.log(last);

            var arr = [1, 2, 3, 4, 5];
            var first = arr.slice(0, 1).shift();
            console.log(first);

            var arr = [1, 2, 3, 4, 5];
            var second = arr.slice(1,2).shift();
            console.log(second);

            var arr =[1, 2, 3, 4, 5];
            var last = arr.slice(4,5).shift();
            console.log(last);
})();
