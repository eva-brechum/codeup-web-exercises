"use strict";
const lastCommit = (userName) => {
fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization': 'GITHUB_KEY'}})
    .then(response => response.json ())
    .then(data=> {
        console.log(data);
        // console.log(data[0].created_at);
        for (let event of data) {
            if (event.type === "PushEvent") {
                console.log(new Date(event.created_at));
                break;
            }
        }
    });
}
lastCommit("eva-brechum");

// const wait = (number) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//         }, 1000)
//     });
// };
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// const wait = (number) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     })
//         reject();
//     }, 1000)
// })

const wait = (ms) => new Promise( resolve => {
    setTimeout(resolve, ms);
});
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));








