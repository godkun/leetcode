/**
 * @param {string} s
 * @return {number}
 */
// 思路：使用字典
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if (len < 1) return len;
  var longest = 1;
  var curLen = 1;
  var subStart = 0;
  var charPos = {};
  charPos[s.charAt(0)] = 0;
  for (var i = 1; i < len; i++) {
    var char = s.charAt(i);
    var posCharPrev = charPos[char];
    if (posCharPrev !== undefined && posCharPrev >= subStart) {
      subStart = posCharPrev + 1;
      curLen = i - subStart + 1;
    }
    else {
      curLen++;
      if (curLen > longest) longest = curLen;
    }
    charPos[char] = i;
  }
  return longest;
};
// test
console.log(lengthOfLongestSubstring('pwwkew'));