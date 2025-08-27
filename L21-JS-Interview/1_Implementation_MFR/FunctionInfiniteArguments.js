// A function that takes variable number of arguments using rest operator
function sum(...args) {
    // args is an array of all arguments passed
    // reduce → accumulate values into a single result
    return args.reduce((acc, v) => acc + v);
}

// Calling sum with 10 numbers
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Output: 55


// Example arrays
let arr = [1, 2];
let arr1 = [3, 4];

// Spread operator (...) expands array elements
// This merges both arrays into a new one
let newArr = [...arr, ...arr1];

console.log(newArr);  
// Output: [1, 2, 3, 4]
