// easy
// nums = [2,7,11,15], target = 9 -> [0,1]
// nums = [3,2,4], target = 6 -> [1,2]
// nums = [3,3], target = 6 -> [0,1]



// O(n^2)

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) { continue; }

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}


// O(n)
// more memory, less iteration
const twoSumHash = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];

    if (n in hash) {
      return [hash[n], i];
    }

    hash[nums[i]] = i;
  }
}
