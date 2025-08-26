const fs = require('fs')
const path = require('path')
let fileName = path.join(__dirname, 'sync.txt')

console.log('Mai pehle print ho jaunga aur mere baad file banegi')

fs.writeFileSync(fileName, 'Mai sync file hu bhau')

console.log('Mai file banne ke baad print hounga kyuki abhi toh synchronized method h na')