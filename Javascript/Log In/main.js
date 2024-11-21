let username = prompt('Enter username');
let password = prompt('Enter password');
const greeting = document.querySelector('#greeting');


// using and operator
// if (username==="admin" && password==="12341234") {
//     greeting.innerHTML =`Hello ${username}!`;
// }

// else {
//     greeting.innerHTML = 'Wrong credentials!';
// }

// using the combination of OR and NOT operators
if (!(username!=="admin" || password!=="12341234")) {
    greeting.innerHTML =`Hello ${username}!`;
}

else {
    greeting.innerHTML = 'Wrong credentials!';
}