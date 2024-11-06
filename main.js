// import express
const express = require('express');
// create express app 
const app = express();
const port = 3070;


// define routes
app.get('/', (req, res) => {
    // send index.html file
    res.sendFile(__dirname + '/index.html');
})
//define maye route
app.get('/maye', (req, res) => {
    // send maye.html file
    res.sendFile(__dirname + '/maye.html');
})
/

// monsuru's route
app.get('/monsuru', (req, res) => {
    // send index.html file
    res.sendFile(__dirname + '/monsuru.html');
})


// listen to the port   
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

