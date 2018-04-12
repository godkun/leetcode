/**
 * @param {number} n
 * @return {number}
 */
/*
// 递归解法
var climbStairs = function(n) {
  if (n == 1 || n == 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
// test
console.log(climbStairs(4));
*/

// 动态规划
var climbStairs = function(n) {
  if (n < 4) return n;
  var a = 2;
  var b = 3;
  var c = 5;
  for (var i = 5; i <= n; i++) {
      a = c;
      c = b + c;
      b = a;
  }
  return c;
};
// test
console.log(climbStairs(4));
