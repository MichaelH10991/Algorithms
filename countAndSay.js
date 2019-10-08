let n = 4

let countAndSay = (n) => {
    let init = "1"
    for (j = 0; j < n - 1; j++) {
        let temp = init[0], count = 0, text = ""
        for (i = 0; i <= init.length; i++) {
            if (temp === init[i]) {
                temp = init[i]
                count++
            } else if (temp != init[i]) {
                text += count + temp
                count = 1
                temp = init[i]
            }
        }
        init = text
    }
    return init
}

console.log(countAndSay(n))
