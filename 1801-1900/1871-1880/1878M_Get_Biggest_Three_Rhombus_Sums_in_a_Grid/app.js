// 1878. Get Biggest Three Rhombus Sums in a Grid
// https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/description/
// T.C.: O(m*n*min(m,n))
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const sum1 = Array.from({ length: m + 1 }, () => new Array(n + 2).fill(0));
  const sum2 = Array.from({ length: m + 1 }, () => new Array(n + 2).fill(0));

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      sum1[i][j] = sum1[i - 1][j - 1] + grid[i - 1][j - 1];
      sum2[i][j] = sum2[i - 1][j + 1] + grid[i - 1][j - 1];
    }
  }

  const ans = new Answer();
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // a single cell is also a rhombus
      ans.put(grid[i][j]);
      for (let k = i + 2; k < m; k += 2) {
        const ux = i;
        const uy = j;
        const dx = k;
        const dy = j;
        const lx = Math.floor((i + k) / 2);
        const ly = j - Math.floor((k - i) / 2);
        const rx = Math.floor((i + k) / 2);
        const ry = j + Math.floor((k - i) / 2);
        if (ly < 0 || ry >= n) {
          break;
        }
        const sum =
          sum2[lx + 1][ly + 1] -
          sum2[ux][uy + 2] +
          (sum1[rx + 1][ry + 1] - sum1[ux][uy]) +
          (sum1[dx + 1][dy + 1] - sum1[lx][ly]) +
          (sum2[dx + 1][dy + 1] - sum2[rx][ry + 2]) -
          (grid[ux][uy] + grid[dx][dy] + grid[lx][ly] + grid[rx][ry]);
        ans.put(sum);
      }
    }
  }

  return ans.get();
};

class Answer {
  constructor() {
    this.ans = [0, 0, 0];
  }

  put(x) {
    if (x > this.ans[0]) {
      this.ans[2] = this.ans[1];
      this.ans[1] = this.ans[0];
      this.ans[0] = x;
    } else if (x !== this.ans[0] && x > this.ans[1]) {
      this.ans[2] = this.ans[1];
      this.ans[1] = x;
    } else if (x !== this.ans[0] && x !== this.ans[1] && x > this.ans[2]) {
      this.ans[2] = x;
    }
  }

  get() {
    const ret = [];
    for (const num of this.ans) {
      if (num !== 0) {
        ret.push(num);
      }
    }
    return ret;
  }
}

var grid = [
  [3, 4, 5, 1, 3],
  [3, 3, 4, 2, 3],
  [20, 30, 200, 40, 10],
  [1, 5, 5, 4, 1],
  [4, 3, 2, 2, 5],
];
var expected = [228, 216, 211];
var result = getBiggestThree(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [20, 9, 8];
var result = getBiggestThree(grid);
console.log(result, result.join() === expected.join());

var grid = [[7, 7, 7]];
var expected = [7];
var result = getBiggestThree(grid);
console.log(result, result.join() === expected.join());
