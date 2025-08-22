function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); 



//Representation-2
const add2 = a => b => c => a + b + c;
console.log(add2(5)(10)(15)); // 30


//Representation 3
function add1(num){
    if(!num)return 0
    return function helper(v){
        if(!v) return num;
        num+=v;
        return helper;
    }
}

console.log(add1())
console.log(add1(1)())
console.log(add1(1)(2)())
console.log(add1(3)(7)(9)())



