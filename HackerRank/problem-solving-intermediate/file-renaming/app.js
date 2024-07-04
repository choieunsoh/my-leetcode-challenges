// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {string} newName
 * @param {string} oldName
 * @return {number}
 */
function renameFile(newName, oldName) {
  const m = newName.length;
  const n = oldName.length;
  let dp = new Array(n + 1).fill(1);
  for (let i = 1; i <= m; i++) {
    const curr = new Array(n + 1).fill(0);
    for (let j = i; j <= n; j++) {
      curr[j] = curr[j - 1];
      if (newName[i - 1] === oldName[j - 1]) {
        curr[j] += dp[j - 1];
      }
    }
    dp = curr;
  }
  return dp[n];
}

var newName = 'aba',
  oldName = 'ababa';
var expected = 4;
var result = renameFile(newName, oldName);
console.log(result, result === expected);

var newName = 'ccc',
  oldName = 'cccc';
var expected = 4;
var result = renameFile(newName, oldName);
console.log(result, result === expected);

var newName = 'abc',
  oldName = 'abba';
var expected = 0;
var result = renameFile(newName, oldName);
console.log(result, result === expected);
