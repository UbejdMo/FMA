let totalSum = 0;

while (true) {
    let input = prompt("Enter a positive number (or 0 to finish):");
    let number = parseFloat(input);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        continue;
    }

    if (number < 0) {
        alert("Please enter a positive number.");
        continue;
    }

    if (number === 0) {
        break;
    }

    totalSum += number;
}

alert(`The sum of the numbers you wrote is equal to ${totalSum}.`);
