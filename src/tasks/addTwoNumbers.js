// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const addTwoNumbers = (l1, l2, add) => {
  if (!l1 && !l2 && !add) return null;
  const sum = (l1?.val || 0) + (l2?.val || 0) + (add ? 1 : 0);
  const addnew = sum > 9 ? 1 : 0;

  return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, addnew));
}

// const f = new ListNode(2, new ListNode(4, new ListNode(3)));
// const s = new ListNode(5, new ListNode(6, new ListNode(4)));
const f = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))));
const s = new ListNode(9, new ListNode(9, new ListNode(9)));
console.log(addTwoNumbers(f, s));