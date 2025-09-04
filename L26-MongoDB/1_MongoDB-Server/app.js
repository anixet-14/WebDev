const path = require('path')
const express = require('express')
const app = express()
const PORT = 4444

app.use(express.urlencoded({extended: true}))

const {MongoClient} = require('mongodb')

//Database running url
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

//Database Name
const dbName = 'testDB' //If database exists, it will use, else it will create a new with this name
//To establish the connection
client.connect() //This is a promise, so we will add then and catch to it also
    .then(()=>{
        console.log("NodeJS Successfully Connected To MongoDB")

        //Initializing or Choosing the db if connection establishes
        const db = client.db(dbName)
        //Choosing the collection we manually made in DB
        const users = db.collection('users')
        //Retrieving the data stored via NodeJS
        users.find({}).toArray()
            .then((data)=>{
                console.log(data)
            })

        //Inserting Data
        users.insertOne({
            name: 'Gupta Ji',
            email: 'Dhamakdhum@gmail.com'
        })
    })
app.listen(PORT, ()=>{
    console.log("Server started at localhost:", PORT)
})