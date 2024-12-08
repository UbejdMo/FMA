let input = prompt("Enter a positive integer between 1 and 100:");
let number = parseInt(input);

if (number >= 1 && number <= 100) {
    let result = "";
    for (let i = 1; i <= number; i++) {
        result += i;
        if (i < number) {
            result += ", ";
        }
    }
    console.log(result);
} else {
    console.log("Please enter a valid number between 1 and 100.");
}
