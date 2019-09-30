/**
 * Have the function FirstReverse(str) take the str parameter being passed
 * and return the string in reversed order. For example: if the input
 * string is "Hello World and Coders" then your program should return the
 * string sredoC dna dlroW olleH.
 */

let str = "Hello World and Coders"
let firstReverse = (str) => {

    for (i = 1; i <= str.length; i++) {
        let last = str[str.length - i]
        str += last
    }
    return str
}

console.log(firstReverse(str))