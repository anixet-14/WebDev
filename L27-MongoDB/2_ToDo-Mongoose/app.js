/*
Mongoose
What it is:
    Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js.
How it’s used:
    It acts as a layer on top of MongoDB, giving you a schema-based solution to model your data.

Features:
    Enforces schemas (you define structure, types, validation).
    Provides middleware & hooks (e.g., before/after saving).
    Built-in query helpers.
    Easier integration with Express/Node apps.
*/ 

const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
const { type } = require('os');

//To establish connection with database
mongoose.connect('mongodb://localhost:27017/Tasks').then((data)=>{
    console.log("DB Connected")
})

//1. To start with Mongoose, we first need to define the schema
const TodoSchema = new mongoose.Schema({
    task: String,
    status: {type: Boolean, default: false},
    date: {type: Date, default: Date.now}
})

//2. Create a model(collection) in which we will insert documents
const Todos= mongoose.model('Todos', TodoSchema)

//3. Creating documents
app.post('/todos', (req, res) => {
    const { task } = req.body;
    //Creating schema is like creating class, so we will use similar syntax for creating task
    let newTodo = new Todos({task})
    newTodo.save()
    res.send({
        message: "Insertion done",
        task
    });
})





// Collection ka naam should be 'Todos' -> To store Documents
app.get('/todos', (req, res) => {
    Todos.find()
        .then(data => {
            res.send({
                msg: 'Todos fetched success',
                tasks: data
            })
        })
        .catch(err => {
            res.send({
                msg: err.message
            })
        })
})


app.put('/todos', async function (req, res) {
    const { id } = req.body;

    // Jab tak DB se find nahi hota aage nahi badhega
    let todo = await Todos.findOne({ _id: id });
    /*
    {
        task: 'Sing',
        status: false,
        _id: new ObjectId('68011f516f31c2a6eae1f033'),
        date: 2025-04-17T15:33:37.750Z
    }
    */
    todo.status = !todo.status;
    await todo.save(); // To again save this code

    res.json({
        message: "Status updated successfully"
    })
})

app.delete('/todos', async (req, res) => {
    const { id } = req.body;

    await Todos.deleteOne({
        _id: id
    })

    res.status(205).json({
        message: "Todo deleted successfully"
    })
})

app.put('/clear-completed', (req, res) => {
    Todos.deleteMany({
        status: true
    }).then((data) => {
        console.log(data);
        res.send({
            msg: "All completed tasks are cleared",
            data
        });
    }).catch((err) => {
        res.send({
            msg: err.message
        })
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});