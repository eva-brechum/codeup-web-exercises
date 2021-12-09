const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//     Use .filter to create an array of user objects where each user object
//     has at least 3 languages in the languages array.

let languageThree = users.filter((language) => language.languages.length > 2);
console.log(languageThree);
//     Use .map to create an array of strings where each element is a user's email address
let userEmail = users.map(user => user.email)
console.log(userEmail);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
//

let totalYears = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
},  0);

console.log(totalYears);
let averageExp = totalYears/users.length;
console.log(averageExp);

//     Use .reduce to get the longest email from the list of users.
// let longestEmail = users.reduce((currentEmail, longEmail) => {
//     if(currentEmail.length > longEmail.length) return currentEmail;
//     return longEmail
//     }, "")
// console.log(longestEmail);

let longestEmail =users.reduce((startLngth, addLetter) => {
    if(startLngth.email.length > addLetter.email.length) {
        return startLngth;
    }else{
        return addLetter;
    }
})
console.log(longestEmail)

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// let userName = users.reduce((total,users) =>  {
//     return total += `${users.name}`;},''
// );
// console.log(userName);

let instructorName =users.reduce ((finalStr, user, index) =>
{
    if (index === users.length -1) {
    return `${finalStr} ${user.name},`
}else{
    return `${finalStr} ${user.name},`
}
}, "Your instructors are:")
    console.log(instructorName);

// Bonus Use .reduce to get the unique list of languages from the list of users.
let uniqueList =users.reduce((langList, user) => {
    for(let lang of user.languages) {
        if(!langList.includes(lang)) {
            langList.push(lang);
        }
    }
    return langList;
},[])
console.log(uniqueList)