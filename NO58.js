/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var len = s.length;
  if (len === 0) return 0;
  charEnd = len - 1;
  while (charEnd >= 0 && s.charAt(charEnd) == ' ') charEnd--;
  if (charEnd < 0) return 0;
  var charStart = charEnd;
  while (charStart >= 0 && s.charAt(charStart) != ' ') charStart--;
  return charEnd - charStart;
};
// test
console.log(lengthOfLastWord('hello world'));