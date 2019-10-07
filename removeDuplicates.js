let nums = [0, 0, 0, 0, 0, 1]

let removeDuplicates = (nums) => {
    if (nums.length == 0) return 0;
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}

console.log(removeDuplicates(nums))
console.log(nums)
