let total = 0;
function sum(number) {
  total += number;
}

const args = process.argv.slice(2);
let numberArray = [parseInt(args[0]), parseInt(args[1]), parseInt(args[2])];

numberArray.forEach(sum);
if (total == 0) console.log("Sum is 0");
else console.log("Sum is NOT 0");
