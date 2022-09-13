function isNotANumber (value) {
    type = (typeof value)
    if (type === 'number'){
        return false
    }
    else{
        return true
    }
}
console.log(isNotANumber('6'))