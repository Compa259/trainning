var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// API to get Interger number
app.get('/getNumber', function(req, res) {
    var object = {
        number: Math.floor(Math.random() * (10 - 1) + 1)
    }
    res.send(object);
});

app.post('/updateNumber', function(req, res) {
    console.log(req.body);
});


const port = 4000;
app.listen(port, () => console.log(`Server PromiseHW is running on port ${port}`));