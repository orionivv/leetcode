// easy
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Input: strs = ["c","acc","ccc"]]
// Output: ""

const longestCommonPrefix = (strs) => {
  if (!strs.length) { return '' }
  let substr = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(substr) !== 0) {
      substr = substr.substring(0, substr.length - 1);
    }
  }

  return substr;
};


console.log(longestCommonPrefix(["c","acc","ccc"])); // ''
console.log(longestCommonPrefix(["flower","flow","flight"])); // fl