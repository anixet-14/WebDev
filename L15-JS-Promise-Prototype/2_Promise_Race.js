let p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Hello")
    }, 3000)
})

let p2 = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("World")
    }, 2000)
})

Promise.race([p1, p2]).then((data)=>{
    console.log(data)
})