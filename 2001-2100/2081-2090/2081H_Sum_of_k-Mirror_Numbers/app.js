// 2081. Sum of k-Mirror Numbers
// https://leetcode.com/problems/sum-of-k-mirror-numbers/description/
// T.C.: O(10^5)
// S.C.: O(1)
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function (k, n) {
  const isOdd = [true, false];
  let sum = 0n;
  let count = 0;
  let left = 1;
  while (count < n) {
    let right = left * 10;
    for (const odd of isOdd) {
      for (let i = left; i < right && count < n; i++) {
        let num = BigInt(i);
        let x = odd ? (i / 10) | 0 : i;
        while (x > 0) {
          num = num * 10n + BigInt(x % 10);
          x = (x / 10) | 0;
        }
        if (isPalindrome(num, k)) {
          count++;
          sum += num;
        }
      }
    }
    left = right;
  }
  return Number(sum);

  function isPalindrome(num, base) {
    const basedNum = num.toString(base);
    let left = 0;
    let right = basedNum.length - 1;
    while (left < right) {
      if (basedNum[left++] !== basedNum[right--]) return false;
    }
    return true;
  }
};

var k = 2,
  n = 5;
var expected = 25;
var result = kMirror(k, n);
console.log(result, result === expected);

var k = 3,
  n = 7;
var expected = 499;
var result = kMirror(k, n);
console.log(result, result === expected);

var k = 7,
  n = 17;
var expected = 20379000;
var result = kMirror(k, n);
console.log(result, result === expected);
