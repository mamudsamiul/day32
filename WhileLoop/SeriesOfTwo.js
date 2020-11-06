const args = process.argv.slice(2);
let number = parseInt(args[0]);

let i = 0;
let result = 1;
while (result < 256 && i <= number) {
  result = Math.pow(2, i);
  console.log(result);
  i++;
}
