let firstNumber = parseFloat(prompt("Write the first number:"));
let secondNumber = parseFloat(prompt("Write the second number:"));
let operator = prompt("What operation do u want to apply?").toLowerCase();
    

let result;
switch (operator) {
    case "addition":
        result =firstNumber + secondNumber;
        break;
    case "subtraction":
        result = firstNumber - secondNumber;
        break;
    case "multiplication":
        result = firstNumber * secondNumber;
        break;
    case "division":
        if (secondNumber === 0){
            throw new Error('Cannot divide by zero!');
        }
        result = firstNumber / secondNumber;
        break;
    case "modulo":
        result = firstNumber % secondNumber;
        break;
    default:
        throw new Error('Invalid operator!');
        break;
        
    };
    console.log(`The result is ${result}`);