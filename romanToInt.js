let s = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII",]

// if the modulus 5 is 0
let romanToInt = function (s) {
    let pairs = ["IV", "IX", "XL", "XC", "CD", "CM"]
    let n = 0
    let prev = ""
    for (item in s) {
        n += getNumber(s[item])
        let pair = prev + s[item]
        if (pairs.includes(pair)) {
            // need to subtract by magnitude of X2
            n -= 2 * getNumber(prev)
        }
        prev = s[item]
    }
    console.log(`${Math.abs(n)}: ${s}`)
}

let getNumber = (numeral) => {
    let numerals = [["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]
    for (j in numerals) {
        let key = numerals[j][0]
        if (key === numeral) {
            return numerals[j][1]
        }
    }
}

for (i = 0; i < s.length; i++) {
    romanToInt(s[i])
}