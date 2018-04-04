// 回文数
/**
 * @param {number} x
 * @return {boolean}
 * @description: 使用整数翻转
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  return x == reverse(x);
  function reverse(kx) {
    let r = 0;
    while (kx > 0) {
      r = r * 10 + kx % 10;
      kx = parseInt(kx / 10);
    }
    return r;
  }
};