let n = 4
let steps = [1, 2]
let sum = 0
let counter = 0

for(i = 0; i< n;i++){
    for(j = 0;j<n;j++){
        sum = steps[i]+steps[j]
        if(sum === 4){
            counter += 1
        }
    }
    sum = 0
}
console.log(counter)
