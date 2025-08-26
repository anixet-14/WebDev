const fs = require('fs').promises
const path = require('path')

let fileName = path.join(__dirname, 'promises.txt')

fs.readFile(fileName, {encoding: 'utf-8'})
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })