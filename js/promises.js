const lastCommit = (userName) => {
fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization': 'GITHUB_KEY'}})
    .then(response => response.json ())
    .then(data=> {
        console.log(data[0].created_at);
        console.log(data);
    })};
lastCommit("eva-brechum");

// const wait = ()





