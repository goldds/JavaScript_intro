function whichZero (num) {
    let demter = Math.sign(1/num)
    if (demter > 0) {
        return false
    }
    else{
        return true
    }
}