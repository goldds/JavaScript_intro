function evenOrOdd (num) {
  let deter = num % 2
  switch (deter){
    case (0):
      console.log('even')
        break
    default:
      console.log('odd')
  }
}
evenOrOdd(4)