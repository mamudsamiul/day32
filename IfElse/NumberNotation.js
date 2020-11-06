const args=process.argv.slice(2);
let input=parseInt(args[0]);
if(input==1){
    console.log("unit");
}else if(input==10){
    console.log("ten");
}else if(input==100){
    console.log("hundred");
}else if(input==1000){
    console.log("thousand");
}else
console.log("more than thousand");