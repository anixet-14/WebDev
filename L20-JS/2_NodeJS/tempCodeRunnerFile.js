const fs = require('fs')
let fileName2 = __dirname+'/'+'another.txt'
fs.writeFile(fileName2, "Hello Word", (err)=>{
    //This is error first callback, so first error will be checked
    if (err) throw err;
    console.log("File-2Written Successfully")
})