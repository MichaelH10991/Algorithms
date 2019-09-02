let x = 1234

let isPalindrome = (x) => {
    let temp = 0
    let n = x
    for (i = 0; i < 4; i++) {
        let end = Math.floor(x % 10)
        console.log(`end: ${end}`)
        x /= 10
    }
}

let getFirst = (x, num) => {
    let n = x
    while (n >= num / 10) {
        n /= 10
    }
    return Math.floor(n)
}

let len = (x) => {
    let count = 0
    let p = 0
    for (i = 0; i <= x; i++) {
        let end = Math.floor(x % 10)
        let start = getFirst(x, count + 1)
        console.log(`start: ${start}`)
        console.log(`end: ${end}`)
        x /= 10
        count++
        i = 0
    }
}

// isPalindrome(x)
// getFirst(x)
// len(x)
len(x)
