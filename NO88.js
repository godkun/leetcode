/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var total = [];
  var i1 = 0;
  var i2 = 0;
  while (i1 < m && i2 < n) {
    if (nums1[i1] < nums2[i2]) {
      total.push(nums1[i1]);
      i1++;
    }
    else {
      total.push(nums2[i2]);
      i2++;
    }
  }
  if (i1 < m) {
    while (i1 < m) {
      total.push(nums1[i1]);
      i1++;
    }
  }
  else if (i2 < n) {
    while (i2 < n) {
      total.push(nums2[i2]);
      i2++;
    }
  }
  for (var i = 0; i < m + n; i++) {
    nums1[i] = total[i];
  }
  return total;
};

// test
console.log(merge([1,2,4,6], 4, [3,5], 2));