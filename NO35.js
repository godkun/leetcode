/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
// ES6解法
var searchInsert = function(nums, target) {
  var index = nums.indexOf(target);
  if (index > -1) return index;
  var res = nums.find(function(n) {
    return n > target;
  });
  if(!res) return nums.length;
  return res;
};
// test
console.log(searchInsert([1, 3, 5, 6], 2));*/

// 二分法解法
var searchInsert = function(nums, target) {
  var len = nums.length;
  return searchIndex(0, len - 1);

  function searchIndex(start, end) {
    if (start >= end) {
      if (target === nums[start]) return start;
      else if (target <= nums[start]) return start;
      else return end + 1;
    }
    var mid = Math.floor((start + end) / 2);
    var temp = nums[mid] - target;
    if (temp === 0) return mid;
    else if (temp > 0) return searchIndex(start, end - 1);
    else return searchIndex(mid + 1, end);
  }
};
// test
console.log(searchInsert([1, 2, 2], 3));
