const args = process.argv.slice(2);
let entry = args[0];

if(entry.length == 4){
    let year = parseInt(entry);
    if((year%4 == 0 && year%100 != 0)||(year%400 == 0)){
        console.log("leap year");
    }
}else{
    console.log("Not a leap year");
}
