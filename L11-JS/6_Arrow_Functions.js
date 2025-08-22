let a=()=>{
    console.log("Hellow")
}
a();

//Single statement inside arrow function is return statement
let sum =(a, b)=> a+b;

console.log(sum(10, 20))

//If you add curly brackets, then return has to be mentioned

let sub=(a, b)=>{
    return a-b
}
console.log(sub(10, 6))