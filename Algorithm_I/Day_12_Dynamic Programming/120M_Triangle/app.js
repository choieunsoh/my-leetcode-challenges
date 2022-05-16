var minimumTotalX = function (triangle) {
  const N = triangle.length - 1;
  const sum = new Array(N + 1).fill(0).map((x) => new Array(N + 1).fill(null));
  for (let i = 0; i <= N; i++) {
    sum[N][i] = triangle[N][i];
  }

  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      console.log(i, j);
      sum[i][j] = triangle[i][j] + Math.min(sum[i + 1][j], sum[i + 1][j + 1]);
    }
  }

  //console.log(sum);
  return sum[0][0];
};

var minimumTotal = (tri, row = 0, col = 0, sum = {}) => {
  if (sum[`${row}-${col}`] !== undefined) {
    return sum[`${row}-${col}`];
  }
  if (row === tri.length - 1) return tri[row][col];

  const left = minimumTotal(tri, row + 1, col, sum);
  const right = minimumTotal(tri, row + 1, col + 1, sum);
  return (sum[`${row}-${col}`] = tri[row][col] + Math.min(left, right));
};
/*
2
3 4
6 5 7
4 1 8 3
*/
var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
