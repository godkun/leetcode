/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  var fast = head;
  var slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) return true;
  }
  return false;
};

// 使用额外空间
/*
var hasCycle = function(head) {
  if (head === null) return false;
  var set = new Set();
  var node = head;
  while (node !== null) {
    if (set.has(node)) return true;
    set.add(node);
    node = node.next;
  }
  return false;
};*/
