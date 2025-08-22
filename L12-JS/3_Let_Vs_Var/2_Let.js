console.log(x)
let z = 10
console.log(z)

// var
var x = 10;
var x = 20; // ✅ redeclare
x = 30;     // ✅ reassign

// let
let y = 10;
// let y = 20; // ❌ SyntaxError (no redeclaration)
y = 30;      // ✅ reassign

{
    let x=10
    console.log(x)
}
{
    let x=30
    console.log(x)
}