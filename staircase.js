let n = 4

let staircase = (n) => {
    let a = 0,  b = 1, temp = 0
    for(i = 0; i < n; i++){
        temp = b
        b = a + b
        a = temp
    }
    return b

}

console.log(staircase(n))
