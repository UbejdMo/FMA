function printHelloWorldTenTimes() {
    for (let i = 0; i < 10; i++) {
        console.log("Hello World");
    }
}

function printString(message) {
    console.log(message);
}

function kilometersToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return miles;
}

function calculateCircleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

function welcomeUser(name, surname) {
    return `Welcome, ${name} ${surname}`;
}

function isWorkingCitizen(age) {
    return age >= 18 && age < 65;
}

function isEven(number) {
    return number % 2 === 0;
}

printHelloWorldTenTimes();

printString("This is a custom message!");

const miles = kilometersToMiles(5);
console.log(`5 kilometers is equal to ${miles.toFixed(2)} miles.`);

const area = calculateCircleArea(10);
console.log(`The area of a circle with radius 10 is ${area.toFixed(2)}.`);

const welcomeMessage = welcomeUser("John", "Doe");
console.log(welcomeMessage);

const workingCitizen = isWorkingCitizen(25);
console.log(`Is a 25-year-old a working citizen? ${workingCitizen}`);

const evenCheck = isEven(42);
console.log(`Is 42 even? ${evenCheck}`);
