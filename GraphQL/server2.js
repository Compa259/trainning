var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var data = require('./data.js');

//GraphQL schema
// var schema = buildSchema(`
//     type Query {
//         user(name: String): User
//         friends(id: Int): [Friend]
//     }

//     type Friend {
//         name: String
//     }

//     type User {
//         id: Int
//         name: String
//         age: Int
//     }

//     type allInfoUser {
//         user: User
//         friends: [Friend]
//     }
    
// `)

var schema = buildSchema(`
    type Query {
        userfriends(name: String): InfoUser
    }

    type InfoUser {
        id: Int
        name: String
        age: Int
        friends: [Friend]
    }

    type Friend {
        name: String
    }
`)

//Data
var users = data.users;
var userFriends = data.userFriends;

// functions
// var getUser = (args) => {
//     let name = args.name;
//     return users.filter(user => {
//         if (user.name === name){
//             return user.id;
//         }
//     })[0];
// } 

// var getUserFriend = (args) => {
//     let id = args.id;
//     return userFriends.filter(userFriend => {
//         if (userFriend.id === id) {
//             return userFriend.id
//         }
//     })[0].friends;
// }

var getFriend = (args) => {
    let name = args.name;
    let user = users.filter(user => {
        if (user.name === name){
            return user.id;
        }
    })[0];

    let friends = userFriends.filter(userFriend => {
        if (userFriend.id === user.id) {
            return userFriend.id
        }
    })[0].friends;

    let userInfo = {
        id: user.id,
        name: user.name,
        age: user.age,
        friends: friends
    }
    console.log(userInfo);
    return userInfo;
}
//Root resolver
var root = {
    // user: getUser,
    // friends: getUserFriend
    userfriends: getFriend
}

//create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
const port = 4000;
app.listen(port, () => console.log(`Server is runnning on ${port}`));