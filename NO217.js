/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length < 2) return false;
  var len = nums.length;
  var arr = [];
  arr.push(nums[0]);
  for (var i = 1; i < len; i++) {
    if (arr.indexOf(nums[i]) > -1) {
      return true;
    }
    arr.push(nums[i]);
  }
  return false;
};
// test
console.log(containsDuplicate([3, 1, 3]));