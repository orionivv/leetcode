function mySqrt2(x) {
  let res = 0;

  while (res <= x) {
    const customRes = res * res;
    if (customRes < x) {
      res++;
    }
    if (customRes === x) {
      return res;
    }
    if (customRes > x) {
      return res - 1;
    }
  }
}

function mySqrt(x) {
  if (x === 0) return x;
  let left = 1, right = x, middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    let square = middle * middle;
    if (x === square) {
      return middle;
    } else if (square < x) {
      left = middle + 1;
    } else {
      right = middle - 1
    }
  }

  return Math.floor(right);
}


const check = 10;
console.log(mySqrt(check), Math.sqrt(check));
