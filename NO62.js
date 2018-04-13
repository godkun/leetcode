/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 通项公式
// s[i, j] = s[i-1, j] + s[i, j-1]
var uniquePaths = function(m, n) {
  var mtx = createMatrix(m, n);
  return mtx[m - 1][n - 1];

  function createMatrix(m, n) {
    var mtx = new Array(m);
    for (var i = 0; i < m; i++) {
      var arr = new Array(n);
      for (var j = 0; j < n; j++) {
        if (i === 0 || j === 0) arr[j] = 1;
        else {
          arr[j] = mtx[i - 1][j] + arr[j-1];
        }
      }
      mtx[i] = arr;
    }
    return mtx;
  }
};
// test
console.log(uniquePaths(3, 7));