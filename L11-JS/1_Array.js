var a=[1, 2, 3,4]
console.log(a);
//Or print using loop
for(var i=0; i<a.length; i++) console.log(a[i])

//Arrays are heterogenous in JS

var b=[1, 2, 3, true, 'Hello World']
console.log(b)

//Array size can be changed during run time
b[10]=10 //Previous indexed will be filled with empty spaces
console.log(b)

//To print array we have a special loop called
//for-of loop
for(let e of b){
    console.log(e)
}