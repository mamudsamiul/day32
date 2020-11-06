const args = process.argv.slice(2);
let number = parseInt(args[0]);

console.log("The Table of Powers of 2: ");
for (let i = 1; i <= number; i++) {
  console.log(Math.pow(2, i));
}