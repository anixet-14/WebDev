let x = 5;  // (Global Lexical Environment)

function outer() {
    let y = 10;   // (Outer Lexical Environment)

    function inner() {
        let z = 20;   // (Inner Lexical Environment)
        console.log(x, y, z);
    }

    inner();
}

outer();
