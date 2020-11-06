const args = process.argv.slice(2);
let number = parseInt(args[0]);

let factorial = 1;
if(number >= 1){
   for(let i = 1; i <= number; i++){
       factorial *= i;
   }
   console.log("Factorial of "+ number+" is "+ factorial);
}else{
    console.log("enter positive number");
}
