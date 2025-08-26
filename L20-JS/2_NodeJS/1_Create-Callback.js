const fs = require('fs') //This comes with NodeJS by default, fs=file System Handlings

let fileName = 'song.txt'

fs.writeFile(fileName, "Hello Word", (err)=>{
    //This is error first callback, so first error will be checked
    if (err) throw err;
    console.log("File Written Successfully")
})


//current file's parent path
console.log(__dirname)

//If I want to add file to nodejs folder
const fs = require('fs')
let fileName2 = __dirname+'/'+'another.txt'
fs.writeFile(fileName2, "Hello Word", (err)=>{
    //This is error first callback, so first error will be checked
    if (err) throw err;
    console.log("File-2Written Successfully")
})
console.log("I might appear first in code") //This may executed first because callbacks are asynchronous

//Simpler way to join two paths
const path = require('path')
let filePath = path.join(__dirname, 'third.txt')
console.log(filePath)
