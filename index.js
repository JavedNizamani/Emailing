const express = require('express');
const app = express();
const port = 3000;

const sendMail = require('./controller/sendMail');

app.get('/',(req, res)=>{
    res.send("I am at root");
});

app.get('/mail', sendMail);

app.listen(port,()=>{
    console.log(`Server Running ${port}`);
});