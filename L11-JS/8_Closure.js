//Closure is object/function that remembers value in same lexical scope
function getFun(){
    let a=10, b=20
    function add(){
        return a+b
    }
    return add
}
let fun = getFun()
console.log(fun())

//Example-2
function createCounter(){
    let cnt=0;
    return function(){
        cnt++;
        return cnt;
    }
}
let cnt1 = createCounter()
let cnt2 = createCounter()

console.log(cnt1())
console.log(cnt1())
console.log(cnt1())

console.log(cnt2())
console.log(cnt2())
console.log(cnt2())