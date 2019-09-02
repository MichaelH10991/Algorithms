let x = 1221

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
    while (n >= num * 10) {
        n /= 10
    }
    console.log(`start: ${Math.floor(n)}`)
}

let len = (x) => {
    let count = 0
    for (i = 0; i <= x; i++) {
        let end = Math.floor(x % 10)
        let start = getFirst(x, count + 1)
        console.log(`start: ${start}`)
        console.log(`end: ${end}`)
        x /= 10
        count++
        i = 0
        console.log(end)
    }
}

// isPalindrome(x)
// getFirst(x)
// len(x)
len(x)
