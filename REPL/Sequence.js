let digit = Math.floor(Math.random() * 10);
console.log("single digit number generated : " + digit);

let numberOnDice = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Number On Dice : " + numberOnDice);

let firstDiceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
let secondDiceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Sum of Two Dice Numbers: " + (firstDiceNumber + secondDiceNumber));

const args = process.argv.slice(2);
let sum = 0;
for(let i = 0; i < 5; i++){
    sum += parseInt(args[i]);
}
console.log("sum = " + sum + " average = " + sum / 5);

const FEET_TO_INCH = 12;
console.log("42 inches = "+ 42/FEET_TO_INCH+" ft");

const FEET_TO_METER = 0.3048;
console.log("area of plot : "+ (60*40)*FEET_TO_METER*FEET_TO_METER);

const ACRE_TO_SQUARE_FOOT = 43560;
console.log("area os 25 such plots in acre : "+ (60*40)/ACRE_TO_SQUARE_FOOT);