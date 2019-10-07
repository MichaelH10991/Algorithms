let x = 1221

let isPalindrome = (x) => {
    if (x < 0) return false
    let reversed = 0, remainder = 0, original = x
    while (x > reversed) {
        remainder = x % 10
        reversed = reversed * 10 + remainder

        x /= 10
        console.log(reversed)
    }
    console.log(`original: ${original}, reversed: ${reversed}`)
    return original === reversed
}

console.log(isPalindrome(x))