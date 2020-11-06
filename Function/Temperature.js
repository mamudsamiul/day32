const args = process.argv.slice(2);
let tempScale = args[0];
let temperature = parseInt(args[1]);

switch (tempScale) {
  case "DegC":
    if(temperature < 0 || temperature >100){
        console.log("Limit Crossed");
        return;
    }
    degCTodegF(temperature);
    break;
  case "DegF":
    if(temperature < 32 || temperature >212){
        console.log("Limit Crossed");
        return;
    }
    degFTodegC(temperature);
    break;
  default:
    break;
}

function degCTodegF(temperature) {
  let degF = (temperature * 9) / 5 + 32;
  console.log("Given Celcius : "+ temperature+ " Converted to Fahrenheit : "+degF);
}

function degFTodegC(temperature) {
  let degC = ((temperature - 32) * 5) / 9;
  console.log("Given Fahrenheit : "+ temperature+ " Converted to Celcius : "+degC);
}