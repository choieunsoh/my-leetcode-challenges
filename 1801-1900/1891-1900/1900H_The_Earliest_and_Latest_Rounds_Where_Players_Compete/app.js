// 1900. The Earliest and Latest Rounds Where Players Compete
// https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/description/
// T.C.: O(n^4 log n)
// S.C.: O(n^2 log n)
/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  const F = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => new Array(30).fill(0)));
  const G = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => new Array(30).fill(0)));

  // F(n,f,s) = F(n,s,f)
  if (firstPlayer > secondPlayer) {
    [firstPlayer, secondPlayer] = [secondPlayer, firstPlayer];
  }
  const [earliest, latest] = dp(n, firstPlayer, secondPlayer);
  return [earliest, latest];

  function dp(n, f, s) {
    if (F[n][f][s]) {
      return [F[n][f][s], G[n][f][s]];
    }

    if (f + s === n + 1) {
      return [1, 1];
    }

    // F(n,f,s) = F(n,n+1-s,n+1-f)
    if (f + s > n + 1) {
      const [x, y] = dp(n, n + 1 - s, n + 1 - f);
      F[n][f][s] = x;
      G[n][f][s] = y;
      return [x, y];
    }

    let earliest = Infinity;
    let latest = -Infinity;
    const n_half = Math.floor((n + 1) / 2);
    if (s <= n_half) {
      // On the left or in the middle
      for (let i = 0; i < f; i++) {
        for (let j = 0; j < s - f; j++) {
          const [x, y] = dp(n_half, i + 1, i + j + 2);
          earliest = Math.min(earliest, x);
          latest = Math.max(latest, y);
        }
      }
    } else {
      // s on the right
      const s_prime = n + 1 - s;
      const mid = Math.floor((n - 2 * s_prime + 1) / 2);
      for (let i = 0; i < f; i++) {
        for (let j = 0; j < s_prime - f; j++) {
          const [x, y] = dp(n_half, i + 1, i + j + mid + 2);
          earliest = Math.min(earliest, x);
          latest = Math.max(latest, y);
        }
      }
    }

    F[n][f][s] = earliest + 1;
    G[n][f][s] = latest + 1;
    return [F[n][f][s], G[n][f][s]];
  }
};

var n = 11,
  firstPlayer = 2,
  secondPlayer = 4;
var expected = [3, 4];
var result = earliestAndLatest(n, firstPlayer, secondPlayer);
console.log(result, result.join() === expected.join());

var n = 5,
  firstPlayer = 1,
  secondPlayer = 5;
var expected = [1, 1];
var result = earliestAndLatest(n, firstPlayer, secondPlayer);
console.log(result, result.join() === expected.join());
