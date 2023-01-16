// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


const lengthOfLongestSubstring2 = (s) => {
  if (s.length === 1) return 1;
  let start = 0;
  let end = 0;
  let longest = 0;

  for (let i = 0; i <= s.length; i++) {
    start = i;

    for (let j = i + 1; j <= s.length; j++) {
      end = j;
      longest = Math.max(longest, s.substring(start, end).length);
      if (s.slice(start, end).indexOf(s[j]) >= 0) {
        break;
      }
    }
  }

  return longest;
};

const lengthOfLongestSubstring3 = (s) => {
  const set = new Set();
  let left = 0;
  let maxSize = 0;


  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1)
  }

  return maxSize;
};

const lengthOfLongestSubstring = (s) => {
  const seen = new Map();
  let start = 0;
  let maxLen = 0;

  for(let i = 0; i < s.length; i++) {
    if(seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

// console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bacwabc'));
