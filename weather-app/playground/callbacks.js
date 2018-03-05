var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Vishal'
    };
    setTimeout(() => {
        callback(user);
    }, 2000)
}

getUser(31, (user) => {
    console.log(user);
})