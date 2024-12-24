let correctPassword = "12341234";
let attempts = 3;
let guess;

do{
    guess= prompt(`Enter your password(${attempts} tries left):`);
    if(guess === correctPassword) {
        alert('Welcome!');
        break;
    }
    attempts--;
    if(attempts === 0) {
        alert('You have no more tries left.');
        break;
    }
}
while(attempts>0);