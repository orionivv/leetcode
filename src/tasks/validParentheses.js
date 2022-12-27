// easy
// Input: s = "()"
// Output: true
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false
// Input: s = "([]{})"
// Output: true


const validParentheses = (s) => {
  const stack = [];

  const getLast = () => stack[stack.length - 1];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
      continue;
    }

    if (char === ')' && getLast() === '(' ) {
      stack.pop()
    } else if (char === ']' && getLast() === '[' ) {
      stack.pop()
    } else if (char === '}' && getLast() === '{' ) {
      stack.pop()
    } else {
      return false;
    }
  }

  return !stack.length;
};



// idea from comments
const validParentheses2 = (s) => {
  const array = [];
  for(let i = 0; i < s.length; i ++){
    if( s[i] === '(' ) array.push( ')' );
    else if( s[i] === '') array.push( ']' );
    else if( s[i] === '') array.push( '}' );
    else if(array[array.length - 1] !== s[i] ) return false;
    else array.pop();
  }
  return array.length === 0;
}


console.log(validParentheses('()'), validParentheses2('()'))
console.log(validParentheses(')(){}'),validParentheses2(')(){}'))
console.log(validParentheses('(]'),validParentheses2('(]'))
console.log(validParentheses('([]{})'),validParentheses2('([]{})'))
