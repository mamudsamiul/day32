const args = process.argv.slice(2);
let number = parseInt(args[0]);
console.log("given number : "+ number);

if(number >= 1 && number <= 100){
let lowerLimit = 0;
let upperLimit = 100;
let mid = (lowerLimit + upperLimit)/2;
while(mid!=number){
    if(number > mid){
        lowerLimit = mid;
        mid = (lowerLimit + upperLimit)/2;
    }
    if(number<mid){
        upperLimit = mid;
        mid = (lowerLimit + upperLimit)/2;
    }
}
if(mid == number){
    console.log("The number given is matched with : "+ mid);
}
}else{
    console.log("Enter between 1 and 100");
}