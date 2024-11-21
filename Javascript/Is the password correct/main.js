let username = prompt("what is your name?");
let pass = prompt("Write the password");
const correct = document.querySelector("#correct");

if (pass == "12341234"){
    correct.innerHTML = `Welcome ${username}!`;
}