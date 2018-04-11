/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length;
  if (len < 2) return len;
  var numPrev = nums[len -1];
  var lenPos = len - 2;
  while (lenPos >= 0) {
    if (nums[lenPos] === numPrev) {
      var lenStart = lenPos;
      while (lenPos >= 0 && nums[lenPos] === numPrev) lenPos--;
      nums.splice(lenPos + 1, lenStart - lenPos);
    } else {
      numPrev = nums[lenPos];
      lenPos--;
    }
  }
  return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));
