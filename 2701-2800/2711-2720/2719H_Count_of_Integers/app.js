// 2719. Count of Integers
// https://leetcode.com/problems/count-of-integers/
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_sum, max_sum) {
  const memo = new Map();
  const MOD = 1e9 + 7;
  return dp(0, 1, 1, 0);

  function dp(i, state1, state2, digitSum) {
    if (i === num2.length) return state1 > 0 && state2 < 2 && digitSum >= min_sum && digitSum <= max_sum ? 1 : 0;

    const key = `${i},${state1},${state2},${digitSum}`;
    if (memo.has(key)) return memo.get(key);

    let ans =
      (i > num1.length || (i === num1.length && state1 > 0)) && digitSum >= min_sum && digitSum <= max_sum ? 1 : 0;
    for (let digit = 0; digit <= 9; digit++) {
      if (i === 0 && digit === 0) continue;
      const newState1 = getState(i, state1, digit, num1);
      const newState2 = getState(i, state2, digit, num2);
      ans = (ans + dp(i + 1, newState1, newState2, digitSum + digit)) % MOD;
    }
    memo.set(key, ans);
    return ans;
  }

  function getState(i, state, digit, num) {
    if (i >= num.length) return 2;
    if (state === 0 || state === 2) return state;
    if (digit > Number(num[i])) return 2;
    if (digit === Number(num[i])) return 1;
    return 0;
  }
};

var num1 = '1',
  num2 = '12',
  min_num = 1,
  max_num = 8;
var expected = 11;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '7',
  num2 = '12',
  min_num = 1,
  max_num = 8;
var expected = 5;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '1',
  num2 = '5',
  min_num = 1,
  max_num = 5;
var expected = 5;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '6312',
  num2 = '9416',
  min_num = 29,
  max_num = 30;
var expected = 114;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '7809',
  num2 = '9275',
  min_num = 19,
  max_num = 22;
var expected = 429;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);
