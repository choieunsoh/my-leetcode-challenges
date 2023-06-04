/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_sum, max_sum) {
  const MOD = 1e9 + 7;
  const dp = [];
  let sum1 = 0;
  let sum2 = 0;

  const digit1 = [];
  getDigits(Number(num1) - 1, digit1);

  const digit2 = [];
  getDigits(Number(num2), digit2);

  digitSum(digit1.length - 1, 0, 1, digit1, 1);
  digitSum(digit2.length - 1, 0, 1, digit2, 2);
  console.log(sum2, sum1);
  return sum2 - sum1;

  function getDigits(x, digit) {
    while (x) {
      digit.push(x % 10);
      x = Math.floor(x / 10);
    }
  }

  function digitSum(idx, sum, tight, digit, result) {
    if (idx === -1) return sum;

    if (dp[idx] && dp[idx][sum] && dp[idx][sum][tight] != null && tight !== 1) {
      return dp[idx][sum][tight];
    }

    let ret = 0;
    const k = tight ? digit[idx] : 9;
    for (let i = 0; i <= k; i++) {
      let next = digit[idx] === i ? tight : 0;

      // fetching answer from next state
      const calcSum = digitSum(idx - 1, sum + i, next, digit, result);
      //console.log(idx, digit[idx], newTight, newSum);
      if (calcSum >= min_sum && calcSum <= max_sum) {
        ret += 1;
      }
    }
    if (idx === 0) {
      if (result === 1) sum1 += ret;
      if (result === 2) sum2 += ret;
    }

    if (tight !== 1) {
      dp[idx] = dp[idx] || [];
      dp[idx][sum] = dp[idx][sum] || [];
      dp[idx][sum][tight] = ret;
    }

    return ret;
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
