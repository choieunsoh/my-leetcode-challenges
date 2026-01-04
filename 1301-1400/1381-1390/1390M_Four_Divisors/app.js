// 1390. Four Divisors
// https://leetcode.com/problems/four-divisors/description/
// T.C.: O(n * sqrt(m))
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  const seen = new Map();
  let sum = 0;
  for (const num of nums) {
    if (seen.has(num)) {
      sum += seen.get(num);
    } else {
      const val = fourDivisorsSum(num);
      seen.set(num, val);
      sum += val;
    }
  }
  return sum;

  function fourDivisorsSum(num) {
    let sum = 0;
    let four = 0;
    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        if (num / i === i) {
          sum += i;
          four++;
        } else {
          sum += i + num / i;
          four += 2;
        }
      }
      if (four > 4) {
        return 0;
      }
    }
    return four === 4 ? sum : 0;
  }
};

var nums = [21, 4, 7];
var expected = 32;
var result = sumFourDivisors(nums);
console.log(result, result === expected);

var nums = [21, 21];
var expected = 64;
var result = sumFourDivisors(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 0;
var result = sumFourDivisors(nums);
console.log(result, result === expected);
