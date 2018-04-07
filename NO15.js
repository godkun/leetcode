var threeSum = function(nums) {
  if (nums === null) return [];
  var len = nums.length;
  if( len < 3) return [];
  nums.sort(function(x, y) {
    return x - y;
  });
  var res = [];
  for(var i = 0; i < len - 2; i++) {
      var v1 = nums[i];
      if(i > 0 && v1 === nums[i - 1]) continue;
      for(var j = i + 1; j < len - 1; j++) {
        var v2 = nums[j];
        if(j > i + 1 && v2 === nums[j - 1]) continue;
          for(var k = j + 1; k < len; k++) {
              var v3 = nums[k];
            if(k > j + 1 && v3 === nums[k - 1]) continue;
            if (v1 + v2 + v3 === 0)
                res.push([v1, v2, v3]);
          }
      }
  }
  return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
