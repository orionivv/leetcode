// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


// n log(n)
const insert = (target, nums) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = null;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return nums.splice(mid, 0, target);
    }

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  const index = nums[mid] < target ? mid + 1 : mid;
  nums.splice(index, 0, target);
  return nums;
};

const findMedianSortedArrays = (nums1, nums2) => {
  const arr = nums1;
  nums2.forEach((i) => insert(i, arr));

  return arr.length % 2
    ? arr[Math.floor(arr.length / 2)]
    : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
};



console.log(findMedianSortedArrays([1,2], [3,4]));