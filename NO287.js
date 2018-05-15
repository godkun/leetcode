var findDuplicate = function(nums) {
  var slow = 0;
  var fast = 0;
  do{
    slow = nums[slow];
    fast = nums[nums[fast]];
  }while(slow != fast);

  slow = 0;
  do{
    slow = nums[slow];
    fast = nums[fast];
  }while(slow != fast);

  return slow;
};