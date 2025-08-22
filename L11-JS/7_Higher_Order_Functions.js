//It is concept that simply states "when functions are considered as datatypes"
function callFun(fun){
    fun();
}
function hellow(){
    console.log("Hello World")
}
callFun(hellow)
function getFun(){
    function helloworld(){
        console.log("Namaste Duniya")
    }
    return helloworld
}
let fun = getFun()
fun()