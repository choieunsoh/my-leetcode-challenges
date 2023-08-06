// 920. Number of Music Playlists
// https://leetcode.com/problems/number-of-music-playlists/
/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function (n, goal, k) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: goal + 1 }, () => new Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= Math.min(i, n); j++) {
      // The i-th song is a new song
      dp[i][j] = (dp[i - 1][j - 1] * (n - j + 1)) % MOD;
      // The i-th song is a song we have played before
      if (j > k) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
      }
    }
  }
  return dp[goal][n];
};

var n = 3,
  goal = 3,
  k = 1;
var expected = 6;
var result = numMusicPlaylists(n, goal, k);
console.log(result, result === expected);

var n = 2,
  goal = 3,
  k = 0;
var expected = 6;
var result = numMusicPlaylists(n, goal, k);
console.log(result, result === expected);

var n = 2,
  goal = 3,
  k = 1;
var expected = 2;
var result = numMusicPlaylists(n, goal, k);
console.log(result, result === expected);
