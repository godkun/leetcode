/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var l = 0;
  var r = nums.length;
  while (l < r) {
    var mid = parseInt((l + r)/2);
    if (nums[mid] > target) {
      r = mid --;
    } else if (nums[mid] < target) {
      l = mid ++;
    } else {
      var arr = [];
      arr.push(mid);
      for(var i = mid+1; i < nums.length; i++) {
        if (nums[mid] === nums[i]) arr.push(i);
      }
      return arr;
    }
  }
  return [-1, -1];
};

// test 
console.log(searchRange([1,2,2,3,4,5], 2));