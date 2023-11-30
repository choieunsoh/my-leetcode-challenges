// 935. Knight Dialer
// https://leetcode.com/problems/knight-dialer/
// T.C.: O(n)
// S.C.: O(n)
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
  const memo = Array.from({ length: n + 1 }, () => new Array(10).fill(0));
  let result = 0;
  for (let square = 0; square < 10; square++) {
    result = (result + dp(n - 1, square)) % MOD;
  }
  return result;

  function dp(remain, square) {
    if (remain === 0) return 1;

    if (memo[remain][square] !== 0) {
      return memo[remain][square];
    }

    let count = 0;
    for (const nextSquare of moves[square]) {
      count = (count + dp(remain - 1, nextSquare)) % MOD;
    }

    memo[remain][square] = count;
    return count;
  }
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
