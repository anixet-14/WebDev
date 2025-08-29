const { mergeSort } = require('./mergesort'); //Because mergesort exported as key-value pair and name mergesort is key and its value is function so we used {key} to export the value
const bubbleSort = require('./bubbleSort');  //It directly exports funcion so we directly write the name
//While importing the files, their code gets executed in the current terminal2


// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
console.log(bubbleSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
