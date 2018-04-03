// 两数之和
var twoSum = function(nums, target) {
  let len = nums.length;
  for(var i = 0; i < len; i++) {
      let s = target - nums[i];
      let arr = nums.slice(i+1);
      let flag = arr.indexOf(s);
      if(flag > -1) return [i, flag+i+1];
  }
};