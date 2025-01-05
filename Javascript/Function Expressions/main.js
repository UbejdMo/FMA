printHelloWorldTenTimes();
printString("Test before declaration");

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

const printHelloWorldTenTimes = function () {
    for (let i = 0; i < 10; i++) {
        console.log("Hello World");
    }
};
//it wont work because we are trying to call the function before initialization
const printString = function (message) {
    console.log(message);
};

const kilometersToMiles = (kilometers) => kilometers * 0.621371;

const calculateCircleArea = (radius) => Math.PI * radius * radius;

const welcomeUser = (name, surname) => `Welcome, ${name} ${surname}`;

const isWorkingCitizen = (age) => age >= 18 && age < 65;

const isEven = (number) => number % 2 === 0;


