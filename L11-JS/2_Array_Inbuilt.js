let a = [1, 2,3, 4]
//Array is like doubly linked list
//Push, pop for operations at the end

a.push(5);
console.log(a);

a.pop(); 
console.log(a);

//unshift, shift for operations at front
a.unshift(10) //To push value at front
console.log(a)
a.shift() //To remove value at front
console.log(a)

//To store the value at front which is removed
let x = a.shift()
console.log("x:", x)

console.log(a)