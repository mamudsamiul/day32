const args = process.argv.slice(2);
let day = parseInt(args[0]);
let month = parseInt(args[1]);
let result = false;

if((month == 3 && day >= 20 && day <= 31) || (month == 4 && day >= 1 && day <= 30) || 
    (month == 5 && day >= 1 && day <= 31) || (month == 6 && day >= 1 && day <= 20))
result = true;

console.log(result);
