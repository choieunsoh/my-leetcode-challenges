// 2375. Construct Smallest Number From DI String
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// T.C.: O(n*2^n)
// S.C.: O(n)
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  const n = pattern.length;
  const used = new Array(10).fill(false);
  let result = '9'.repeat(n + 1);
  backtrack(0, '');
  return result.toString();

  function backtrack(index, str) {
    if (index === n + 1) {
      result = Math.min(result, str);
      return;
    }

    const dir = pattern[index - 1];
    const curr = Number(str[index - 1]);

    for (let next = 1; next <= 9; next++) {
      if (used[next]) continue;
      if (dir === 'I' && curr >= next) continue;
      if (dir === 'D' && curr <= next) continue;

      used[next] = true;
      backtrack(index + 1, str + String(next));
      used[next] = false;
    }
  }
};

var pattern = 'IIIDIDDD';
var expected = '123549876';
var result = smallestNumber(pattern);
console.log(result, result === expected);

var pattern = 'DDD';
var expected = '4321';
var result = smallestNumber(pattern);
console.log(result, result === expected);
