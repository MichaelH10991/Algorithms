let n = 8

let countAndSay = (n) => {
    getNext(n)
}

let getNext = (n) => {
    let init = "1", text = ""
    for (j = 0; j < n; j++) {
        let temp = init[0], count = 0, text = ""
        console.log(`init: ${init}`)
        for (i = 0; i <= init.length; i++) {
            if (temp === init[i]) {
                temp = init[i]
                count++
            } else if (temp != init[i]) {
                console.log(count + temp)
                text += count + temp
                count = 1
                temp = init[i]
            }
        }
        init = text
    }
    return text
}

console.log(countAndSay(n))
