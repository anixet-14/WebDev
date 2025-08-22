helloworld() //Other languages will give error
//But Both var and let are hoisted (moved to the top of their scope during compilation).
//Let is placed in the Temporal Dead Zone (TDZ) from the start of the block until the actual declaration.
console.log(x)
function helloworld(){
    console.log("Hello All")
}
var x=10
console.log(10)

/* After hoisting the code looks like:
    var x;
    function helloworld(){
        console.log("Hello All")    
    }
    helloworld()
    console.log(x)
    x=10
    console.log(x)
*/