/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length;
  if (m === 0) return 0;
  var n = obstacleGrid[0].length;

  var mtx = createMatrix(m, n);
  return mtx[m - 1][n - 1];

  function createMatrix(m, n) {
    var mtx = new Array(m);
    for (var i = 0; i < m; i++) {
      var arr = new Array(n);
      for (var j = 0; j < n; j++) {
        if (obstacleGrid[i][j] == 1) arr[j] = 0;
        else if (i === 0 && j === 0) arr[j] = 1;
        else if (i === 0) arr[j] = arr[j - 1];
        else if (j === 0) arr[j] = mtx[i - 1][j];
        else {
          arr[j] = mtx[i - 1][j] + arr[j - 1];
        }
      }
      mtx[i] = arr;
    }
    return mtx;
  }
};

// test
console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]));