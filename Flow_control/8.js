 function numberRange (num){
  if(0 > num){
    console.log(`${num} is less than 0`)
  }
  else if (0 < num < 50){
    console.log(`${num} is between 0 and 50`)
  }
  else if (51 < num < 100){
    console.log(`${num}is between 51 and 100`)
  }
  else if(100 < num){
    console.log(`${num} is greater than 100`)
  }
 }
 numberRange(25);
 numberRange(75);
 numberRange(125);
 numberRange(-25);