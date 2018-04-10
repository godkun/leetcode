// 翻转整数，只针对32位int
var reverse = function(x) {
  if(x === 0) return 0;
  var absX = x > 0 ? x : -x;
  var y = 0;
  while (absX > 0) {
    y = y * 10 + absX % 10;
    absX = parseInt(absX / 10);
  }
  // 判断是否超过32位int
  if (y >= 2147483651) y = 0;
  return x > 0 ? y : -y;
};
// test
console.log(reverse(321));