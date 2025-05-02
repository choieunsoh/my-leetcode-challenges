// 838. Push Dominoes
// https://leetcode.com/problems/push-dominoes/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const result = Array.from(dominoes);
  const n = dominoes.length;
  const indices = new Array(n + 2).fill(0);
  const symbols = new Array(n + 2).fill('');

  let len = 0;
  indices[len] = -1;
  symbols[len++] = 'L';

  for (let i = 0; i < n; i++) {
    if (dominoes[i] !== '.') {
      indices[len] = i;
      symbols[len++] = dominoes[i];
    }
  }

  indices[len] = n;
  symbols[len++] = 'R';

  for (let index = 0; index < len - 1; index++) {
    const left = indices[index];
    const right = indices[index + 1];
    const leftDomino = symbols[index];
    const rightDomino = symbols[index + 1];

    if (leftDomino === rightDomino) {
      for (let i = left + 1; i < right; i++) {
        result[i] = leftDomino;
      }
    } else if (leftDomino > rightDomino) {
      // 'R' > 'L'
      for (let mid = left + 1; mid < right; mid++) {
        if (mid - left === right - mid) {
          result[mid] = '.';
        } else if (mid - left < right - mid) {
          result[mid] = 'R';
        } else {
          result[mid] = 'L';
        }
      }
    }
  }

  return result.join('');
};

var dominoes = 'RR.L';
var expected = 'RR.L';
var result = pushDominoes(dominoes);
console.log(result, result === expected);

var dominoes = '.L.R...LR..L..';
var expected = 'LL.RR.LLRRLL..';
var result = pushDominoes(dominoes);
console.log(result, result === expected);
