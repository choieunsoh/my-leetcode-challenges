// 3348. Smallest Divisible Digit Product II
// https://leetcode.com/problems/smallest-divisible-digit-product-ii/description/
// T.C.: O(n + D log^2 t)
// S.C.: O(n)
/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function (num, t) {
  let temp = t;
  for (let i = 2; i <= 9; i++) {
    while (temp % i === 0) {
      temp /= i;
    }
  }
  if (temp > 1) {
    return '-1';
  }

  const n = num.length;
  const rem = new Array(n + 1);
  rem[0] = t;
  let pos = n - 1;
  const numArr = num.split('');
  for (let i = 0; i < n; i++) {
    if (numArr[i] === '0') {
      pos = i;
      break;
    }
    rem[i + 1] = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
  }

  if (rem[n] === 1) {
    return num;
  }

  for (let i = pos; i >= 0; i--) {
    while (true) {
      numArr[i] = String.fromCharCode(numArr[i].charCodeAt(0) + 1);
      if (numArr[i] > '9') {
        break;
      }

      let tNow = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
      let k = 9;

      for (let j = n - 1; j > i; j--) {
        while (tNow % k !== 0) {
          k--;
        }
        tNow = Math.floor(tNow / k);
        numArr[j] = String.fromCharCode('0'.charCodeAt(0) + k);
      }

      if (tNow === 1) {
        return numArr.join('');
      }
    }
  }

  const result = [];
  let originalT = t;
  for (let i = 9; i > 1; i--) {
    while (originalT % i === 0) {
      result.push(String.fromCharCode('0'.charCodeAt(0) + i));
      originalT = Math.floor(originalT / i);
    }
  }

  const padding = Math.max(n + 1 - result.length, 0);
  for (let i = 0; i < padding; i++) {
    result.push('1');
  }

  return result.reverse().join('');

  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};

var num = '1234',
  t = 256;
var expected = '1488';
var result = smallestNumber(num, t);
console.log(result, result === expected);

var num = '12355',
  t = 50;
var expected = '12355';
var result = smallestNumber(num, t);
console.log(result, result === expected);

var num = '11111',
  t = 26;
var expected = '-1';
var result = smallestNumber(num, t);
console.log(result, result === expected);
