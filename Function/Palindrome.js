function reverseNo(number){
    let reverse=0;
    while(number!=0){
        reverse = reverse * 10 + number % 10;
        number=Math.floor(number/10);
    }
    return reverse;
}

function isPalindrome(x, y) {
    return x == reverseNo(y);
  }

  const args = process.argv.slice(2);
  if(isPalindrome(parseInt(args[0]), parseInt(args[1]))) console.log("palindrome");
  else console.log("numbers are not palindrome");
