//Data
var users = [
    {
        id: 1,
        name: 'Nguyen Minh Duc',
        age: 23
    },
    {
        id: 2,
        name: 'Nguyen Quang Huy',
    }
]

var userFriends = [
    {
        id: 1,
        friends: [
            {
                name: 'A'
            },
            {
                name: 'B'
            },
            {
                name: 'C'
            }
        ]
    },
    {
        id: 2,
        friends: [
            {
                name: 'D'
            },
            {
                name: 'E'
            },
            {
                name: 'F'
            }
        ]
    }
]

module.exports = {
    users,
    userFriends
}