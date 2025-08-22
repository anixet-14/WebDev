let a = [1, 0, 10, 8, 7]
console.log(a.sort()) //sorts lexicographically

console.log(a.sort((a, b)=>{return a-b})) //Sorts numerically

function sortArray1(a){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            a.sort((a, b)=>a-b)
            res(a);
        }, 3000)
    })
}
function sortArray2(a){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            a.sort((a, b)=>a-b)
            res(a);
        }, 1000)
    })
}

let arr1 = [2, 3, 6, 1, 2]
let arr2 = [9, 1, 4, 2, 0]

Promise.all([sortArray1(arr1), sortArray2(arr2)])
.then(data=>{console.log(data)})