function reverseNo(number){
    let reverse=0;
    while(number!=0){
        reverse = reverse * 10 + number % 10;
        number=Math.floor(number/10);
    }
    return reverse;
}

 function isPrime(number){
    let count = 0;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) count++;
    }
    return number > 1 && count == 0;
 }

 const args = process.argv.slice(2);
let number = parseInt(args[0]);

if(isPrime(number)){
    let palindrome = reverseNo(number);
    if(isPrime(palindrome)) console.log("Palindrome of prime is also prime");
    else console.log("Palindrome of prime is not prime");
}
