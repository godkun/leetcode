/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  var icount = 0;
  var first = null;
  var second = null;
  var prev = null;
  dfs(root);
  if (first !== null && second !== null) {
    var val = first.val;
    first.val = second.val;
    second.val = val;
  }
  function dfs(node) {
    if (icount == 2) return;
    if (node.left !== null) dfs(node.left);
    if (prev !== null && prev.val > node.val) {
      if(icount === 0) first = prev;
      second = node;
      icount++;
    }
    prev = node;
    if (node.right !== null) dfs(node.right);
  }
};