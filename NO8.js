// 字符串转换成整数
var myAtoi = function(str) {
  str = str.trim();
  // 匹配不是+ - 和数字的第一个索引
  var index = str.search(/[^+-\d]/);
  console.log(index);
  var sub;
  if(index < 0) sub = str;
  else sub = str.substr(0, index);
  var num  = Number(sub);
  if (isNaN(num)) num = 0;
  if (num >= 2147483647) return 2147483647;
  if (num <= -2147483647) return -2147483647;
  return num;
}
console.log(myAtoi(' +-3333'));