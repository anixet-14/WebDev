// Original array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Add custom filter method to Array prototype
Array.prototype.myFilter = function (cb) {
    /*
    Example callback function user might pass:
    cb = (e, i, a) => {
        if (e % 2 == 0) return false; // reject even numbers
        return true; // keep odd numbers
    }
    */

    // 'this' refers to the array on which myFilter is called
    let originalArray = this;

    // Array to store elements that pass the test
    let x = [];

    // Loop through every element of the array
    for (let i = 0; i < originalArray.length; i++) {
        // Call callback with element, index, and the whole array
        let ans = cb(originalArray[i], i, originalArray);

        // If callback returns truthy → keep this element
        if (ans) x.push(originalArray[i]);
    }

    // Return new filtered array
    return x;
}

// Use our custom filter: keep only even numbers
let newArr = arr.myFilter((e, i, a) => {
    //console.log(e, i, a);   // show current element, index, and full array
    if (e % 2 == 0) return true; // keep evens
    return false;            // reject odds
})

console.log(newArr); // [2, 4, 6, 8]
console.log(arr);    // [1, 2, 3, 4, 5, 6, 7, 8] → original unchanged
