// 650. 2 Keys Keyboard
// https://leetcode.com/problems/2-keys-keyboard/description/
// T.C.: O()
// S.C.: O()
const primeNumbers = new Set();
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n === 1) {
    return 0;
  }

  if (primeNumbers.size === 0) {
    buildPrimeNumbers();
  }

  if (primeNumbers.has(n)) {
    return n;
  }

  const dp = new Array(n + 1).fill(0);
  for (let num = 2; num <= n; num++) {
    if (primeNumbers.has(num)) {
      dp[num] = num;
    } else {
      let minSteps = Infinity;
      for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
          minSteps = Math.min(minSteps, dp[divisor] + num / divisor);
        }
      }
      dp[num] = minSteps;
    }
  }
  return dp[n];
};

function buildPrimeNumbers() {
  for (let num = 2; num <= 1000; num++) {
    if (isPrime(num)) {
      primeNumbers.add(num);
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  if (n <= 3) return true; // 2 and 3 are prime numbers

  // This is checked so that we can skip middle five numbers in below loop
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

var n = 3;
var expected = 3;
var result = minSteps(n);
console.log(result, result === expected);

var n = 4;
var expected = 4;
var result = minSteps(n);
console.log(result, result === expected);

var n = 8;
var expected = 6;
var result = minSteps(n);
console.log(result, result === expected);

var n = 21;
var expected = 10;
var result = minSteps(n);
console.log(result, result === expected);

var n = 1;
var expected = 0;
var result = minSteps(n);
console.log(result, result === expected);
/*
1 0
2 2
3 3
4 4   AAAA
5 5
6 5   AAAAAA
7 7
8 6   AAAAAAAA
9 6   AAAAAAAAA
10 7  AAAAAAAAAA
11 11
12 7  AAAAAAAAAAAA
13 13
14 9  AAAAAAAAAAAAAA
15 8  AAAAAAAAAAAAAAA
16 8  AAAAAAAAAAAAAAAA
17 17
18 8  AAAAAAAAAAAAAAAAAA
19 19
20 9  AAAAAAAAAAAAAAAAAAAA
21 10 AAAAAAAAAAAAAAAAAAAAA
22 13 AAAAAAAAAAAAAAAAAAAAAA
23 23
24 9
*/
