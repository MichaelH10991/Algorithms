const twoSum = (nums, target) => {
  // setting inital comp
  const comp = {}
  // loop through array
  for (let i = 0; i < nums.length; i++) {
    // if the the number in comp is greater than or equal to 0
    if (comp[nums[i]] >= 0) {
      // return i'th number in comp and i
      return [comp[nums[i]], i]
    }
    // store diff between target and number being evaluated
    comp[target - nums[i]] = i
    console.log(i)
  }
}

twoSum([[2, 7, 11, 15]], 9)