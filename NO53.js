/**
 * @author yangkun
 * @date 2018/4/8
 * @Descripton: Maximum Subarray
 * 贪心求解，将大问题分解成小问题，假设sum(i-1)已求出，然后求sum(i)
 * sum(i) = sum(i-1) < 0 ? nums[i] : nums[i] + sum(i-1)
*/
var maxSubArray = function(nums) {
  var len = nums.length;
  if (len === 0) return 0;
  var maxSum = nums[0];
  var curSum = nums[0];
  // len == 1 的话不执行for循环，直接返回maxSum
  for(var i = 1; i < len; i++) {
      curSum = (curSum < 0 ? nums[i] : nums[i] + curSum);
      maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2]));