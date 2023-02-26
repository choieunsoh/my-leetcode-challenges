// 299. Bulls and Cows
// https://leetcode.com/problems/bulls-and-cows/
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;
  const counting = Array(10).fill(0);
  const z = '0'.charCodeAt(0);
  const n = secret.length;
  for (let i = 0; i < n; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      const s = secret.charCodeAt(i) - z;
      const g = guess.charCodeAt(i) - z;
      if (counting[s]++ < 0) cows++;
      if (counting[g]-- > 0) cows++;
    }
  }
  return `${bulls}A${cows}B`;
};

var secret = '1807',
  guess = '7810';
var expected = '1A3B';
var result = getHint(secret, guess);
console.log(result, result === expected);

var secret = '1123',
  guess = '0111';
var expected = '1A1B';
var result = getHint(secret, guess);
console.log(result, result === expected);
