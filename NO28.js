/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var len1 = haystack.length;
  var len2 = needle.length;
  for (var i = 0; i <= len1 - len2; i++) {
    if (haystack.substring(i, i + len2) === needle) return i;
  }
    return -1;
};
// test
console.log(strStr('hello', 'll'));