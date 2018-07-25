var axios = require('axios');

axios({
    url: 'http://localhost:4000/graphql',
    method: 'get',
    data: {
      query: `
        query getFriend {
            userInfo: userfriends(name: "Nguyen Minh Duc") {
                id,
                name,
                age,
                friends {
                  name
                }
            }
        }
        `
    }
  }).then((result) => {
    console.log(result.data.data)
  });