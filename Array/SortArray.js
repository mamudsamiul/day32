let numberArray = new Array();
  for(let i = 0; i < 10; i++){
    numberArray.push(Math.floor(Math.random() * 1000));
  }

  numberArray.sort(function(a, b){return a-b});
  console.log("Second highest number : "+numberArray[8]);
  console.log("Second lowest number : "+numberArray[1]);