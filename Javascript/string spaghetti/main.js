const str = '     hello, dolly! ';
const trimmed = str.trim();
const firstLetter = trimmed[0].toUpperCase(); 
console.log(firstLetter);

const time = '05:36 PM';
const [hours, rest] = time.split(':'); 
const minutes = rest.slice(0, 2);
const period = rest.slice(3); 

const hoursNumber = parseInt(hours); 
const minutesNumber = parseInt(minutes);

console.log(hoursNumber); 
console.log(minutesNumber); 
console.log(period); 

const tempString = "New York, 15°C";
// const tempString = "Ottawa, -4°C"; // Uncomment to test
// const tempString = "Prishtina, 50°F"; // Uncomment to test

const [city, temperature] = tempString.split(', '); 
const cityName = city.trim(); 
const tempValue = parseFloat(temperature);

console.log(cityName); 
console.log(tempValue);
