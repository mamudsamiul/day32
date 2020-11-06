const args=process.argv.slice(2);
let day=parseInt(args[0]);

if(day<1 || day >7){
    console.log('Invalid Date Given !')
}else if(day==1){
    console.log('Sunday');
}else if(day==2){
    console.log('Monday');
}else if(day==3){
    console.log('Tuesday');
}else if(day==4){
    console.log('Wednesday');
}else if(day==5){
    console.log('Thursday');
}else if(day==6){
    console.log('Friday');
}else{
    console.log('Saturday');
}