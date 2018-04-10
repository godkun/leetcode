// single number
// 使用异或解决
// 2 ^ 1 ^ 1 = 2
var singleNumber = function(nums) {
  var res = 0;
  var len = nums.length;
  for(var i = 0; i < len; i++) {
      res ^= nums[i];
  }
  return res;
}

// test
console.log(singleNumber([1, 2, 1, 2, 3, 4, 4]));