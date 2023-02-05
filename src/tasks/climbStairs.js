function climbStairs(n) {
  if(n === 0 || n === 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

function climbStairs2(n) {
  let a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

const check = 8
console.log(climbStairs(check), climbStairs2(check));