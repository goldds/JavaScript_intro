let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function makeNum (list) {
    return arr.map((word)=> (word.length))
}
function oddLengths (list) {
    num_list = makeNum(list)
    return num_list.filter(num =>((num % 2 === 0) === false ))
}

console.log(oddLengths(arr))