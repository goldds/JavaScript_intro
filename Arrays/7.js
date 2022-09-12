function sumOfSquares (list) {
    return list.reduce((sum, num) => {
        return sum + (num * num)
    }, 0)
    
}
let array = [3, 5, 7];
console.log(sumOfSquares(array));