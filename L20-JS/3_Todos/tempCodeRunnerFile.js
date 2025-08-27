let fsp = require('fs/promises')
let fs = require('fs')
let path = require('path')

class Todos{
    static addtask(name){
        let filePath = path.join(__dirname,'data', 'Todos.json')
        //Read the file:
        let data = fs.readFileSync(filePath, 'utf-8'); //Checks the already existing data in the file
        data = JSON.parse(data) //Convering it into JS Object
        data.push(name);
        console.log(data)
        // fsp.writeFile(filePath,  JSON.stringify(data))
        //     .then(()=>{
        //         console.log("Task Added Successfully")
        //     })
        //     .catch(err=>{
        //         throw new Error("Couldn't add task")
        //     })

    }
}


Todos.addtask("Criket")