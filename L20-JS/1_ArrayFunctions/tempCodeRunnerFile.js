let arr=[1, 2, 3, 4 ,5]

let ans = arr.reduce((acc, val, indx, ar)=>{
    return acc+val;
})
//Acc stores the value which is being returned and val stores next value in the array
//Steps
//      acc:1  val:2
//      acc:3  val:3
//      acc:6  val:4
//      acc:10  val:5
//      Ans = 10+5 = 15

console.log(ans)

//value to the accumulator can also be initialized manually
let factAns = arr.reduce((acc, val, index, ar)=>{
    return acc*val;
}, 0)

console.log(factAns) //Returns zero, because acc is initialized with 0 at the start