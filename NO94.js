/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) return [];
  var stack = [];
  var node = root;
  var res = [];
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    }
    else {
      node = stack.pop();
      res.push(node.val);
      node = node.right;
    }
  }
  return res;
};