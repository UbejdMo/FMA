document.addEventListener('keypress', (e) => {
    let letter = e.key.toLowerCase();
    let vowel = 'aeiouy';
    let consonant = 'bcdfghjklmnpqrstvwxyz';
    let numbers = '123456789';

    if (vowel.includes(letter)) {
        alert('The letter is a vowel');
    } else if (consonant.includes(letter)) {
        alert('The letter is a consonant');
    }
     else if (numbers.includes(letter)) {
        alert('The input is a number');
     }
     else {
        alert('The input is a symbol or a special character');
    }

});