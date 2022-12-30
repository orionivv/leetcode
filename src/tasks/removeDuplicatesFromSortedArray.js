// easy
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = (arr) => {
  let point = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[point] === arr[i]) {
      arr[i] = '_';
    } else {
      const current = arr[i];
      arr[i] = '_';
      point++;
      arr[point] = current;
    }
  }

  return point + 1;
}

console.log(removeDuplicates([1,2]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,2,2,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));