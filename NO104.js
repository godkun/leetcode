/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var depth = 0;
  if ( root ) {
    var ldepth = maxDepth ( root.left );
    var rdepth = maxDepth ( root.right );
    depth = ( ldepth > rdepth ) ? ldepth + 1 : rdepth + 1;
  }
  return depth;
};