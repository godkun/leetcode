/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var pre = null;
  var cur = head;
  var newHead = null;
  while (cur !== null) {
    var next = cur.next;
    cur.next = pre;
    if (next === null) newHead = cur;
    pre = cur;
    cur = next;
  }
  return newHead;
};