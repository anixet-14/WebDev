const fs = require('fs')
const path = require('path')

let fileName = path.join(__dirname, 'another.txt')

const data = fs.readFileSync(fileName, 'utf-8')
console.log(data)