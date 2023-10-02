// 1220. Count Vowels Permutation
// https://leetcode.com/problems/count-vowels-permutation/
// T.C.: O(N)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  let a = 1;
  let e = 1;
  let i = 1;
  let o = 1;
  let u = 1;
  const MOD = 1e9 + 7;
  while (n-- > 1) {
    let new_a = a % MOD;
    let new_e = e % MOD;
    let new_i = i % MOD;
    let new_o = o % MOD;
    let new_u = u % MOD;

    a = new_e + new_i + new_u;
    e = new_a + new_i;
    i = new_e + new_o;
    o = new_i;
    u = new_i + new_o;
  }
  return (a + e + i + o + u) % MOD;
};

var n = 1;
var expected = 5;
var result = countVowelPermutation(n);
console.log(result, result === expected);

var n = 2;
var expected = 10;
var result = countVowelPermutation(n);
console.log(result, result === expected);

var n = 5;
var expected = 68;
var result = countVowelPermutation(n);
console.log(result, result === expected);
