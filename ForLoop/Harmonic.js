const args = process.argv.slice(2);
let number = parseInt(args[0]);

let harmonic = 0;
for (let i = 1; i <= number; i++) harmonic += 1 / i;
console.log("Harmonic number = " + harmonic);
