let arr=[11, 12,13 , 14, 15]

let newArr = arr.map((data, index, a)=>{
    //console.log(data, index, a)
    return data*data
})
console.log(newArr)