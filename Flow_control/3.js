function evenOrOdd (num) {
  let deter = num % 2
  if (Number.isInteger(num) === false) {
    console.log('error not Integer!')
  }else{
    switch (deter){
      case (0):
        console.log('even')
        break
      default:
        console.log('odd')
  }
}}

evenOrOdd(4)