/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  let n = s.length;
  if (n === 1) return false;

  const nums = [...s].map(Number);
  while (n > 2) {
    for (let i = 0; i < n - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    n--;
  }

  return nums[0] === nums[1];
};

var s = '3902';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s = '34789';
var expected = false;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s = '34785';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);
