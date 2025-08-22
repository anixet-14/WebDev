//There is no return type of function

function hello(){
    console.log("Namaste")
}
hello()
function sum(a, b){
    return a+b
}
console.log(sum(10.1, 5));

let x = sum(11, 12.3)
console.log(x.toFixed(2)) //Returns 2 digits after decimal
console.log(x.toPrecision(5)) //Returns total 5 digit

//In JS functions are also a data type
let a=10; //Number is a datatype, and we can store it inside a variable
console.log(a)

a= function hello(){
    console.log("Bonjour")
}
a();
//hello(); //Now this is invalid, because it is stored in a, so variable needs to be called, not value
console.log(a) //Print the name of function
console.log(a.toString()) //Prints the entire function
