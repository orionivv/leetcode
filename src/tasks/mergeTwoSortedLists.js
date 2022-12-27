// easy
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


const mergeTwoLists = (list1, list2) => {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
}


console.log(mergeTwoLists(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null,
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      }
    }
  }
))