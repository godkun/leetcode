/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  if (!words || !(words instanceof Array) || words.length === 0 || words.length > 1000) {
    return '输入不符合要求';
  }
  let result = '';
  let len = words.length;
  for(let i = 0; i < len; i++) {
    if (result.length < words[i].length) {
      result = words[i];
    } else if (result.length === words[i].length) {
      // 获取字典排序最小的单词
      if (result > words[i]) {
        result = words[i]
      }
    }
  }
  return result;
};
// test
console.log(longestWord(['a', 'app', 'apple', 'apply']));


