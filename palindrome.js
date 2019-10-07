const x = 1221

let isPalindrome = (x) => {
    if (x < 0) return false

    for (i = 0; i < x; i++) {
        let n = x % 10
        console.log(n)
        x /= 10
    }
}

isPalindrome(x)