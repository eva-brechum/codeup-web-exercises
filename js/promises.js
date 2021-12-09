const lastCommit = (userName) => {
fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization': 'GITHUB_KEY'}})
    .then(response => response.json ())
    .then(data=> {
        console.log(data[0].created_at);
        console.log(data);
    })};
lastCommit("eva-brechum");

const wait = (number) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        }, 1000)
    });
};
// wait(1000). then(() => console.log())
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));







