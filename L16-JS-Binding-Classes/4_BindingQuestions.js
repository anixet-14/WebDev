function hello(){
    console.log(this);
    function innerFun(){
        console.log("Inner Fun", this)
    }
    innerFun()
}
let obj = {as:1}
//hello.call(obj) //This will return Global as inside the function it is calling innerFun() which is default binding


function hello1(){
    console.log(this.a)
}
let obj1 = {a:1}
let obj2 = {a:11}
hello1.call(obj1)
hello1.call(obj2)


let myHello=()=>{
    console.log(this.a)
}
this.a="Aham Brahmasmi"
let obj3 = {a:1}
let obj4 = {a:11}
myHello.call(obj3)
myHello.call(obj4)

function namaste(){
    console.log(this);
    let innerfunc=()=>{ //Inner Function is inside Namste, toh it will use its parent for context. Due to this confusing working, we don't prefer arrow function in binding
        console.log("Inner Func", this);
    }
    innerfunc()
}
let obj5 = {a:4}
namaste.call(obj5)