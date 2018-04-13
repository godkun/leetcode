/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var len = s.length;
  for (var i = 0; i < len; i++) {
    var char = s.charAt(i);
    var stacklen = stack.length;
    if (stacklen === 0) stack.push(char);
    else {
      // 是否匹配，是就pop
      if (isMatch(stack[stacklen - 1], char)) {
        stack.pop();
      } else {
        // 栈中的必须是 ( { [
        if (!isValidChar(char)) return false;
        stack.push(char);
      }
    }
  }
  return stack.length === 0;
};

function isMatch(char1, char2) {
  if ((char1 == '(' && char2 == ')') ||
      (char1 == '{' && char2 == '}') ||
      (char1 == '[' && char2 == ']'))
    return true;
  else
    return false;
}

function isValidChar(char) {
  if (char == '(' || char == '{' || char == '[') return true;
  else return false;
}

// test
console.log(isValid('(){}[{}]'));
