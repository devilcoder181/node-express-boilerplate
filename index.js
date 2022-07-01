const express = require('express');

const app = express();


// Routes
app.get('/api/v1/test', (req, res)=> {
    res
    .status(200)
    .json({
       status: 'success',
       data: {
        title: 'devilCoder',
        message: 'This is a message from KeplerB2'
       }
    });
});

app.post('/api/v1/test', (req, res)=> {

});


// Server Start
const port = 8080;
app.listen(port, ()=> {
    console.log(`Bhoom! Server started @ ${port} `);
});