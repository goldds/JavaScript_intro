let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function findIntegers (list){
   return list.filter(item => Number.isInteger(item) === true)
}
let integers = findIntegers(things);
console.log(integers); 



