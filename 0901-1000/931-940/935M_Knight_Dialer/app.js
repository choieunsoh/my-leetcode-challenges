// 935. Knight Dialer
// https://leetcode.com/problems/knight-dialer/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  /*
  1 2 3
  4 5 6
  7 8 9
  * 0 #
  */
  const moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];
  const MOD = 1e9 + 7;
  let prevDp = new Array(10).fill(1);

  for (let remain = 1; remain < n; remain++) {
    const dp = new Array(10).fill(0);
    for (let square = 0; square < 10; square++) {
      let count = 0;
      for (const nextSquare of moves[square]) {
        count = (count + prevDp[nextSquare]) % MOD;
      }
      dp[square] = count;
    }
    prevDp = dp;
  }

  let result = 0;
  for (let square = 0; square < 10; square++) {
    result = (result + prevDp[square]) % MOD;
  }
  return result;
};

var n = 1;
var expected = 10;
var result = knightDialer(n);
console.log(result, result === expected);

var n = 2;
var expected = 20;
var result = knightDialer(n);
console.log(result, result === expected);

var n = 3131;
var expected = 136006598;
var result = knightDialer(n);
console.log(result, result === expected);
