function lengthOfLastWord(s) {
  return s.trim().split('  ').at(-1).length;
};

function lengthOfLastWord2(s) {
   let skipSpace = true;
   let len = 0;

   for (let i = s.length - 1; i >= 0; i--) {
     if (s[i] === ' ') {
       if (!skipSpace) {
         break
       } else {
         continue;
       }
     } else {
       skipSpace = false
     }

     len++;
   }
  return len;
}

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));