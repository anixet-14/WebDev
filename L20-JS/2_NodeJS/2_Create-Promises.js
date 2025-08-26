const fs = require('fs/promises')

const path = require('path')
let filename = path.join(__dirname, 'promises.txt')

fs.writeFile(filename, "Yeh Promises se bana hai")
    .then(()=>{
        console.log("File Created and Written Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })


//To append text we use a flag and to overwrite we use w flag
fs.writeFile(filename, "\nNayi Line Jodenge", {flag: 'a'})
    .then(()=>{
        console.log("Text Appended")
    })
    .catch((err)=>{
        console.log(err)
    })


console.log("This will print first because this is also asynchronous")