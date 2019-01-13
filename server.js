const express = require ('express');
var app = express();
const port = 8080;
const hostName='localhost';

app.get('/', (req, res) => res.send('Alexander'))


app.listen(port,hostName,()=> {
    console.log(`Server is running at http://${hostName}:${port}/`);
});