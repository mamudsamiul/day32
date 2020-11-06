const args=process.argv.slice(2);
let unit = args[0];
let value = parseInt(args[1]);

const FEET_TO_INCH = 12;
const FEET_TO_METER = 0.3048;

switch(unit){
    case("Feet"):
    console.log(value + " Feet to Inch : " + value * FEET_TO_INCH);
    console.log(value + " Feet to Meter : " + value * FEET_TO_METER);
    break;
    case("Inch"):
    console.log(value + " Inch to Feet : " + value/FEET_TO_INCH);
    break;
    case("Meter"):
    console.log(value + " Meter to Feet : " + value/FEET_TO_METER);
    break;
    default:
        console.log("enter proper unit");
}