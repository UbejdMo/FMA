let x = parseInt(prompt("Enter the number of Fibonacci terms to generate:"));

if (x > 0) {
    let a = 1, b = 1;
    console.log(a);
    if (x > 1) console.log(b);
    for (let i = 3; i <= x; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
} else {
    console.log("Please enter a positive number.");
}
