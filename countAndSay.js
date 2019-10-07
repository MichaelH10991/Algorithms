x = 13112221

let countAndSay = (x) => {
    x = x.toString()
    let count = 0
    let text = ""
    // setting initial num we're looking at
    let temp = x[0]
    for (i = 0; i <= x.length; i++) {
        // temp should be equal on the first run
        if (temp === x[i]) {
            // store the num it matched on so it will always match until changed later on when new number appears
            temp = x[i]
            count++
            // new number has appeared so change temp and append count to text
        } else if (temp != x[i]) {
            // append count to text
            text += count + temp
            // set count to 1 because we've seen this new number
            count + 1
            //change temp to the new number
            temp = x[i]
        }
    }
    console.log(text)
}

countAndSay(x)
