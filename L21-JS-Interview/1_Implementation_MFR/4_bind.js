// A normal function that uses `this` and takes two parameters
function hello(college, year) {
    console.log(this, college, year);
}

// Example object we want to bind as `this`
let obj = {
    name: 'abc'
}

// Custom implementation of bind
Function.prototype.mybind = function (myObj, ...args) {
    // `this` refers to the function on which mybind is called
    // e.g. hello.mybind(...) → here `this === hello`
    let fun = this;

    /*
        Example:
        fun = [Function: hello]
        args = ["NSUT", 2025]   // pre-set arguments
    */

    // Return a new function (closure)
    return function (...args1) {
        /*
            args1 = arguments passed when the new function is called
            Example: f(2025) → args1 = [2025]
        */

        // Call the original function `fun`
        // - Set `this` explicitly to `myObj`
        // - Combine pre-set args (from mybind) with new args (from call time)
        fun.apply(myObj, [...args, ...args1]);

        /*
            Equivalent to:
            hello.apply(obj, ["NSUT", 2025])
        */
    }
}

// Create a new bound function
let f = hello.mybind(obj, "NSUT", 2025);

// Call the bound function
f(); 
// Output: { name: 'abc' } "NSUT" 2025
