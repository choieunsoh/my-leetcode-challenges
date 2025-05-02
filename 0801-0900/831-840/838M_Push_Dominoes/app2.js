// 838. Push Dominoes
// https://leetcode.com/problems/push-dominoes/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const symbols = Array.from(dominoes);
  const n = dominoes.length;
  const forces = new Array(n).fill(0);

  let force = 0;
  for (let i = 0; i < n; ++i) {
    if (symbols[i] === 'R') {
      force = n;
    } else if (symbols[i] === 'L') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] += force;
  }

  force = 0;
  for (let i = n - 1; i >= 0; --i) {
    if (symbols[i] === 'L') {
      force = n;
    } else if (symbols[i] === 'R') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force;
  }

  let result = '';
  for (const force of forces) {
    result += force > 0 ? 'R' : force < 0 ? 'L' : '.';
  }
  return result;
};

var dominoes = 'RR.L';
var expected = 'RR.L';
var result = pushDominoes(dominoes);
console.log(result, result === expected);

var dominoes = '.L.R...LR..L..';
var expected = 'LL.RR.LLRRLL..';
var result = pushDominoes(dominoes);
console.log(result, result === expected);
