/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var delNum = nums.length -1; delNum >= 0; delNum--) {
    if (nums[delNum] === val) nums.splice(delNum, 1);
  }
  return nums.length;
};
// test
console.log(removeElement([3, 3], 3));