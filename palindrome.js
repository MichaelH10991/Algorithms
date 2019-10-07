let x = 4321

let isPalindrome = (x) => {
    let temp = 0
    let n = x
    for (i = 0; i < 4; i++) {
        let end = Math.floor(x % 10)
        console.log(`end: ${end}`)
        x /= 10
    }
}

let getFirst = (x, c) => {
    console.log(c)
    while (x >= c) {
        x /= 10
    }
    x %= 10
    console.log(x)

    return Math.floor(x)
}

let len = (x) => {
    let count = 10
    for (i = 0; i <= x; i++) {
        let end = Math.floor(x % 10)
        let start = getFirst(x, count)
        count *= 10
        console.log(`start: ${start}`)
        console.log(`end: ${end}`)
        x /= 10
        i = 0
    }
}

let flip = (x) => {
    let array = JSON.stringify(x)
    console.log(array)
    let n = array.length
    let temp = 0

    for (letter in array) {
        if (letter >= 1) {
            letter = 0
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 1; j < (n - i); j++) {
            if (array[i] < array[i + 1]) {
                temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
            }
        }
    }
    // console.log(array)
    return array
}

let palindrome = (x) => {
    let end = 0
    let copy = x
    let div = 1000
    let totalDiff = 0
    for (i = 0; i <= x; i++) {
        end = Math.floor(x % 10)
        start = Math.floor(copy / (div))
        start %= 10
        div /= 10
        x /= 10
        console.log(`start: ${start} end: ${end}`)
        console.log(`${start} - ${end} = ${start - end}`)
        totalDiff += Math.abs(start - end)
    }
    console.log(totalDiff)
}

console.log(palindrome(x))
//console.log(flip(x))
// isPalindrome(x)
// getFirst(x)
// len(x)
// len(x)
