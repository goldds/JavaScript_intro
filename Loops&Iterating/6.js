function factorical (num, fact = 1) {
    if (num){
        return (factorical(num-1, fact * num))
    }    
    else {
    return fact
}}

console.log(factorical(5))

// I did it recurvisely the first time