const axios = require('axios');

function getNumber(){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/getNumber')
        .then(response => {
            resolve(response.data.number);
        })
    })   
}

function doupleNumber(number) {
    return number * number;
}

function updateNumber(number){
    let data = JSON.stringify({
        number
    });

    axios.post('http://localhost:4000/updateNumber', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


function test(){
    getNumber()
    .then(number => doupleNumber(number))
    .then(newNumber => updateNumber(newNumber))
}

test();
