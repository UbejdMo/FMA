let points = parseInt(prompt("Type the amount of points"));

if (points > 0 && points <=19) {
    alert("ur grade is 1");
}

else if (points >= 20 && points <= 39) {
    alert("ur grade is 2");
}
else if (points >= 40 && points <= 59) {
    alert("ur grade is 3");
}

else if (points >= 60 && points <= 79) {
    alert("ur grade is 4");
}

else if (points >= 80 && points <= 100) {
    alert("ur grade is 5");
}
// if its not a Number,is a number smaller than 0 or bigger than 100
else {
    alert("Invalid input.");
}