// 3470. Permutations IV
// https://leetcode.com/problems/permutations-iv/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var permute = function (n, k) {
  const fact = new Array(101).fill(Number.MAX_SAFE_INTEGER);
  init();

  // [even, odd]
  const numsLeft = [Math.floor(n / 2), Math.floor((n + 1) / 2)];
  const numsChosen = [new Array(n + 1).fill(false), new Array(n + 1).fill(false)];

  // if evenDigits, can start from both odd or even
  const placeOdd = n % 2 ? 1 : -1;
  const result = [];
  constructArray(placeOdd, numsChosen, k);

  return result;

  function init() {
    if (fact[0] === 1) return;
    fact[0] = 1;
    for (let i = 1; i <= 20; i++) {
      fact[i] = BigInt(i) * BigInt(fact[i - 1]);
    }
  }

  function calcPerms(odd, even) {
    const fromOdd = fact[odd];
    const fromEven = fact[even];

    let totalPerms = Number.MAX_SAFE_INTEGER;
    if (Math.log10(Number(fromOdd)) + Math.log10(Number(fromEven)) <= 18) {
      totalPerms = Number(fromOdd) * Number(fromEven);
    }

    return totalPerms;
  }

  function constructArray(placeOdd, numsChosen, k) {
    if (numsLeft[0] + numsLeft[1] === 0) {
      return;
    }

    let nextPerms;
    if (placeOdd === -1) {
      nextPerms = calcPerms(numsLeft[1], numsLeft[0] - 1);
    } else {
      nextPerms = calcPerms(numsLeft[1] - placeOdd, numsLeft[0] - (placeOdd ^ 1));
    }

    for (let i = 1; i <= n; i++) {
      if (placeOdd === -1 || i % 2 === placeOdd) {
        if (!numsChosen[i % 2][i]) {
          if (k > nextPerms) {
            k -= nextPerms;
          } else {
            numsLeft[i % 2]--;
            result.push(i);
            numsChosen[i % 2][i] = true;
            constructArray(i % 2 ^ 1, numsChosen, k);
            break;
          }
        }
      }
    }
  }
};

var n = 4,
  k = 6;
var expected = [3, 4, 1, 2];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 3,
  k = 2;
var expected = [3, 2, 1];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 2,
  k = 4;
var expected = [];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 12,
  k = 825407;
var expected = [10, 7, 4, 5, 12, 11, 8, 9, 6, 1, 2, 3];
var result = permute(n, k);
console.log(result, result.join() === expected.join());

var n = 13,
  k = 2618881;
var expected = [11, 2, 3, 12, 5, 8, 9, 10, 1, 4, 7, 6, 13];
var result = permute(n, k);
console.log(result, result.join() === expected.join());
