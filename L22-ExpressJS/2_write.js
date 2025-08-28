const write = require('write')

write('testing.txt', 'This is the text')
    .then(()=>{
        console.log("All Done")
    })
    .catch((err)=>{
        console.log(err)
    })