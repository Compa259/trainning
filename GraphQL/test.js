var axios = require('axios');

function findUserId(name) {
    let info = JSON.stringify({
        name
    });

    axios.post('http://localhost:6000/getUser', info, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        let infoUser = response.data;
        return infoUser.id;
    })
    .then(id => getFriend(id));
}

function getFriend(id) {
        let idObject = JSON.stringify({
            id
        });
    
        axios.post('http://localhost:6000/getUserFriend', idObject,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data)
        })
}

findUserId('Nguyen Minh Duc');