'use strict';
const express = require ('express');
var app = express();
const port = process.env.port | 8080;
const hostName='localhost';

app.get('/', function (req, res){ res.send('Alexander')})


app.listen(port,hostName,()=> {
    console.log(`Server is running at http://${hostName}:${port}/`);
});