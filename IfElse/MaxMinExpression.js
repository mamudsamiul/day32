const args=process.argv.slice(2);
let firstNumber=parseInt(args[0]);
let secondNumber=parseInt(args[1]);
let thirdNumber=parseInt(args[2]);

let firstFunction = firstNumber + secondNumber * thirdNumber;
let secondFunction = firstNumber % secondNumber + thirdNumber;
let thirdFunction = thirdNumber + firstNumber / secondNumber;
let fourthFunction = firstNumber * secondNumber + thirdNumber;

console.log("Max : "+ Math.max(firstFunction, secondFunction, thirdFunction, fourthFunction));
console.log("Min : "+ Math.min(firstFunction, secondFunction, thirdFunction, fourthFunction));