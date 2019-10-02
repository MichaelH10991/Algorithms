

let numerals = [["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]

let s = "IIV"

// if the modulus 5 is 0
let romanToInt = function (s) {
    for (i in s) {
        let numeral = s[i]
        for (j in numerals) {
            if (numerals[j][0] === numeral) {
                console.log(`the numeral: ${s[i]} the number: ${numerals[j][1]}`)

            }
        }
    }
}

romanToInt(s)