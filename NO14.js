/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return '';
  var len = strs.reduce(function(num, str) {
    return Math.min(num, str.length)
  }, Infinity);
  if (len === 0) return '';
  for (var i = 0; i < len; i++) {
    var char1 = strs[0].charAt(i);
    for(var j = 1; j < strs.length; j++) {
        var char2 = strs[j].charAt(i);
        if (char1 != char2) return strs[0].substring(0, i);
    }
  }
  return strs[0].substring(0, len);
};
// test
console.log(longestCommonPrefix(['sss', 'ss']));