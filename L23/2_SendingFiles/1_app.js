const express = require('express');
const app = express();
const path = require('path'); // provided by nodejs bydefault

/*
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>

    <script>
        console.log("Hello world");
    </script>
</head>

<body>
    <h1 style='background-color: black; color: white;'>Hello world</h1>

    <p style="background-color: orange;">Welcome to my app, I am a para</p>
</body>

</html>`)
}) // This is not comfortable to work with
*/



app.get('/', (req, res) => {
    console.log(__dirname); // meri current file jaha __dirname chala uske parent directory tak ka path
    res.sendFile(path.join(__dirname, '/index.html'));
    // res.sendFile('/Users/kartikmathur/Desktop/C++/WebDev-LiveBatch-15Jan/L22-ExpressJS/2_sendingfiles/index.html');
})

// Every inclusion of css or js file is a new request to the server
//Means if the html file has linked any css or js file, client will request those files also to run the html file
//Hence we need to provide response for those linked files also which is done below
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/script.js'));
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/style.css'))
})


app.listen(4444, () => {
    console.log("http://localhost:4444");
})