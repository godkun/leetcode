var maxCoins = function(nums) {
  var len = nums.length;
  if (len === 0) return 0;
  var iNums = new Array(len + 2);
  iNums[0] = 1;
  var i, j;
  for (i = 0; i < len; i++) iNums[i + 1] = nums[i];
  iNums[len + 1] = 1;

  var dp = new Array(len + 2);
  for (i = 0; i < len + 2; i++) {
    dp[i] = new Array(len + 2);
    for (j = 0; j < len + 2; j++) {
      dp[i][j] = 0;
    }
  }

  for (var size = 1; size <= len; size++) {
    for (var left = 1; left + size < len + 2; left++) {
      var right = left + size - 1;
      for (var k = left; k <= right; k++) {
        var val = iNums[left - 1] * iNums[k] * iNums[right + 1];
        dp[left][right] = Math.max(dp[left][right], val + dp[left][k - 1] + dp[k + 1][right]);
      }
    }
  }
  return dp[1][len];
};