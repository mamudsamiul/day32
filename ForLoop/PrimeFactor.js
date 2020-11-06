const args = process.argv.slice(2);
let number = parseInt(args[0]);

console.log("Prime Factors of " + number + " are : ");
for (let i = 2; i <= number/2; i++) {
    if(number % i == 0){
        let count = 0;
         for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) count++;
         }
     if(count == 0 && i > 1) console.log(i);
    }
} 