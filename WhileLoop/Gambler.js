let amount = 100;
let winCount = 0;
let betCount = 0;

while(amount > 0 && amount < 200){
    let number = Math.floor(Math.random()*10)%2;
    betCount++;
    if(number == 0){
        amount++;
        winCount++;
    }
    else{
        amount--;
    }
}
if(amount == 0){
    console.log("No more money left");
    console.log("Bets played : "+ betCount + " Won : "+winCount);
}else{
console.log("Goal Acheived ");
console.log("Bets played : "+ betCount + " Won : "+winCount);
}