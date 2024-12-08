let target = Math.floor(Math.random() * 6) + 1;
let attempts = 0;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 6:"));
    attempts++;
} while (guess !== target);

if (attempts === 1) {
    alert(`Congratulations, you guessed the correct number in ${attempts} try!`);
} else {
    alert(`Congratulations, you guessed the correct number in ${attempts} tries!`);
}
