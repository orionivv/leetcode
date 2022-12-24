// easy
// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInteger = (s) => {
  let result = 0;

  while (s) {
    if (map[s[1]] > map[s[0]]) {
      result += (map[s[1]] - map[s[0]]);
      s = s.substring(2);
    } else {
      result += map[s[0]];
      s = s.substring(1);
    }
  }

  return result;
}


const romanToIntegerReverse = (s) => {
  const len = s.length;
  let result = map[s[len - 1]];

  for (let i = len - 2; i >= 0; i--) {
    if (map[s[i]] >= map[s[i + 1]]) {
      result += map[s[i]];
    } else {
      result -= map[s[i]];
    }
  }

  return result;
}

console.log(romanToIntegerReverse('III')) // 3
console.log(romanToIntegerReverse('LVIII')) // 58
console.log(romanToIntegerReverse('MCMXCIV')) // 1994