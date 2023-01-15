const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = null;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return nums[mid] < target ? mid + 1 : mid;
}


// console.log(searchInsert([1,3,5,6,7,9,10], 8));
// console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1,3,5,6], 2)); // 1