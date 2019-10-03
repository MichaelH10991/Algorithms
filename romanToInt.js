let numerals = [["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]

let s = "IIIV"

// if the modulus 5 is 0
let romanToInt = function (s) {
    let n = 0
    for (i in s) {
        let numeral = s[i]
        for (j in numerals) {
            if (numerals[j][0] === numeral) {
                console.log(`iter: ${i}: the numeral: ${s[i]} the number: ${numerals[j][1]}, str.len ${s.length} ${i == s.length - 2}`)
                if (i == s.length - 1) {
                    n += numerals[j][1]
                } else {
                    n += -numerals[j][1]
                }
            }
        }
    }
    console.log(Math.abs(n))
}

romanToInt(s)