function max (list) {
    let left =0
    let right = (list.length -1)
    let maxNum = 0
    while (left < right){
        if (list[right] > maxNum){
           maxNum = list[right]

        }
        if (list[left] > maxNum){
           maxNum = list[left]
        }
        right -= 1
        left += 1
    }
    return maxNum
}
let list = [1, 6, 3, 2]

console.log(max(list))