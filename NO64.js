/**
 * @param {number[][]} grid
 * @return {number}
 */
// 通项公式
// s[i,j] = min(s[i-1,j], s[i,j-1])+grid[i,j]
var minPathSum = function(grid) {
  var m = grid.length;
  if (m === 0) return 0;
  var n = grid[0].length;
  var mtx = createMatrix(m, n);
  return mtx[m - 1][n - 1];

  function createMatrix(m, n) {
    var mtx = new Array(m);
    for (var i = 0; i < m; i++) {
      var arr = new Array(n);
      for (var j = 0; j < n; j++) {
        if (i === 0 && j === 0) arr[j] = grid[0][0];
        else if (i === 0) arr[j] = arr[j - 1] + grid[i][j];
        else if (j === 0) arr[j] = mtx[i - 1][0] + grid[i][0];
        else {
          arr[j] = Math.min(arr[j - 1] + grid[i][j],
            mtx[i - 1][j] + grid[i][j]);
        }
      }
      mtx[i] = arr;
    }
    return mtx;
  }
};