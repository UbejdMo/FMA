let a = parseInt(prompt("write the value of a"));
let b = parseInt(prompt("write the value of b"));
let c = parseInt(prompt("write the value of c"));

    // let largestnr;  if we want to achieve it with a variable

if (a > b && a > c){
    alert("a, with the value: "+a+" is the largest among the three");
    // largestnr = a;
}
else if (b > a && b > c){
    alert("b, with the value: "+b+" is the largest among  the three");
    // largestnr = b;
}

else {
    alert("c, with the value: "+c+" is the largest among the three");
    // largestnr = c;
}
// alert("The largest number is: ", largestnr);