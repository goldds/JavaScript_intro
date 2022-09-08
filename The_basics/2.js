let num = 4936
thousands = (num.toString)[0]
let hundereds = (num.toString)[1]
let tens = (num.toString)[2]
let ones =(num.toString)[3]
// or
let thous = (num - (num % 1000))/1000
let hund = (num - (num % 100))/100
let ts = (num - (num % 10))/10
let os  = (num % 10)
console.log(os)