function findMaxNumber(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  function findMinNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }

  let numberArray = new Array();
  for(let i = 0; i < 10; i++){
    numberArray.push(Math.floor(Math.random() * 1000));
  }

  let max = findMaxNumber(numberArray);
  let index = numberArray.indexOf(max);
  numberArray.splice(index, 1);
  console.log("Second highest number : "+ findMaxNumber(numberArray));

  let min= findMinNumber(numberArray);
   index = numberArray.indexOf(min);
  numberArray.splice(index, 1);
  console.log("Second lowest number : "+ findMinNumber(numberArray)); 