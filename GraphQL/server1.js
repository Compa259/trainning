var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data.js');
//creat express server
var app = express();

app.use(bodyParser.json());

//Data
var users = data.users;
var userFriends = data.userFriends;

// API
app.post('/getUser', function(req, res) {
    let info = req.body;
    // console.log(info.name);
    //console.log(JSON.parse(req.body));
    let neededUser = users.filter(user => {
        if(user.name === info.name) {
            return user.id;
        }
    })[0];
    
    res.send(neededUser);
});

app.post('/getUserFriend', function(req, res) {
    let idObject = req.body;

    let listFriend = userFriends.filter(userFriend => {
        if(userFriend.id === idObject.id){
            return userFriend.friends;
        }
    })[0];

    res.send(listFriend.friends);
});


const port = 6000;
app.listen(port, () => console.log(`Express server is running on port ${port}`));