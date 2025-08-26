const fs = require('fs')
const path = require('path')

let fileName = path.join(__dirname, 'another.txt')
fs.readFile(fileName, (err, data)=>{
    if(err) throw err
    console.log(data) //This returns binary, because data is stored in binary form
    //to convert into string
    console.log(data.toString())
})

//Method-2 for printing by telling the encoding used to save the text
fs.readFile(fileName, {encoding: 'utf-8'},  (err, data)=>{
    if(err) throw err
    console.log(data)
})
