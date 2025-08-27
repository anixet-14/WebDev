// Example arrays
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];

// Adding our own custom map function to Array's prototype
Array.prototype.mymap = function (cb) {
    /*
    // Example of what the user might pass as callback:
    cb = (e, i, a) => {
        return e * e;
    }
    */

    // 'this' refers to the array on which mymap was called (implicit binding)
    // e.g. arr.mymap(...) → inside here, 'this' === arr
    let originalArray = this;

    // Like the built-in map, we need to return a completely new array
    let newArr = [];

    // Iterate over each element of the array
    for (let i = 0; i < originalArray.length; i++) {
        // Call the callback with element, index, and whole array
        let new_Val = cb(originalArray[i], i, originalArray);

        // Push the result of callback into our new array
        newArr.push(new_Val);
    }

    // Return the new array (does not mutate original array)
    return newArr;
}

// Use our custom map: cube each element
let newArr = arr.mymap((e, i, a) => {
    console.log(e, i, a);  // Log current element, index, and full array
    return e * e * e;      // Return cube of element
})

console.log(newArr); // [1, 8, 27, 64, 125]
console.log(arr);    // [1, 2, 3, 4, 5] → original unchanged

// Another usage: take square root of each element
let newArr1 = arr1.mymap((e, i, a) => {
    return Math.sqrt(e);
})

console.log(newArr1); // [1, 1.414..., 1.732..., 2, 2.236...]
