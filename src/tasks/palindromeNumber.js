// easy
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


const palindrome = (x) => {
  return x.toString().split('').reverse().join('') === x.toString();
};

// without converting to string
const palindromeNumber = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let secondPart = 0;
  while (x > secondPart) {
    secondPart = (secondPart * 10) + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === secondPart || x === Math.floor(secondPart / 10);
};