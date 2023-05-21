// 2698. Find the Punishment Number of an Integer
// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let result = 0;
  const nums = [];
  for (let x = 1; x <= n; x++) {
    const xx = x * x;
    if (xx === x) {
      nums.push(x);
      continue;
    }

    const num = xx.toString().split('').map(Number);
    const len = num.length;
    if (len === 2) {
      const sum11 = num[0] + num[1];
      if (sum11 === x) {
        nums.push(x);
        continue;
      }
    }

    if (len === 3) {
      // 1 1 1, 1 2, 2 1
      const sum111 = num[0] + num[1] + num[2];
      if (sum111 === x) {
        nums.push(x);
        continue;
      }

      const num12 = num[0] + num[1] * 10 + num[2];
      if (num12 === x) {
        nums.push(x);
        continue;
      }

      const num21 = num[0] * 10 + num[1] + num[2];
      if (num21 === x) {
        nums.push(x);
        continue;
      }
    }

    if (len === 4) {
      // 1 1 1 1, 1 1 2, 1 2 1, 2 1 1, 2 2, 1 3, 3 1
      const sum1111 = num[0] + num[1] + num[2] + num[3];
      if (sum1111 === x) {
        nums.push(x);
        continue;
      }

      const sum112 = num[0] + num[1] + num[2] * 10 + num[3];
      if (sum112 === x) {
        nums.push(x);
        continue;
      }

      const sum121 = num[0] + num[1] * 10 + num[2] + num[3];
      if (sum121 === x) {
        nums.push(x);
        continue;
      }

      const sum211 = num[0] * 10 + num[1] + num[2] + num[3];
      if (sum211 === x) {
        nums.push(x);
        continue;
      }

      const sum13 = num[0] + num[1] * 100 + num[2] * 10 + num[3];
      if (sum13 === x) {
        nums.push(x);
        continue;
      }

      const sum31 = num[0] * 100 + num[1] * 10 + num[2] + num[3];
      if (sum31 === x) {
        nums.push(x);
        continue;
      }

      const sum22 = num[0] * 10 + num[1] + num[2] * 10 + num[3];
      if (sum22 === x) {
        nums.push(x);
        continue;
      }
    }

    if (len === 5) {
      // 1 1 1 1 1, 1 1 1 2, 1 1 2 1, 1 2 1 1, 2 1 1 1, 1 1 3, 1 3 1, 3 1 1, 2 3, 3 2
      const sum11111 = num[0] + num[1] + num[2] + num[3] + num[4];
      if (sum11111 === x) {
        nums.push(x);
        continue;
      }

      const sum1112 = num[0] + num[1] + num[2] + num[3] * 10 + num[4];
      if (sum1112 === x) {
        nums.push(x);
        continue;
      }

      const sum1121 = num[0] + num[1] + num[2] * 10 + num[3] + num[4];
      if (sum1121 === x) {
        nums.push(x);
        continue;
      }

      const sum1211 = num[0] + num[1] * 10 + num[2] + num[3] + num[4];
      if (sum1211 === x) {
        nums.push(x);
        continue;
      }

      const sum2111 = num[0] * 10 + num[1] + num[2] + num[3] + num[4];
      if (sum2111 === x) {
        nums.push(x);
        continue;
      }

      const sum113 = num[0] + num[1] + num[2] * 100 + num[3] * 10 + num[4];
      if (sum113 === x) {
        nums.push(x);
        continue;
      }

      const sum131 = num[0] + num[1] * 100 + num[2] * 10 + num[3] + num[4];
      if (sum131 === x) {
        nums.push(x);
        continue;
      }

      const sum311 = num[0] * 100 + num[1] * 10 + num[2] + num[3] + num[4];
      if (sum311 === x) {
        nums.push(x);
        continue;
      }

      const sum23 = num[0] * 10 + num[1] + num[2] * 100 + num[3] * 10 + num[4];
      if (sum23 === x) {
        nums.push(x);
        continue;
      }

      const sum32 = num[0] * 100 + num[1] * 10 + num[2] + num[3] * 10 + num[4];
      if (sum32 === x) {
        nums.push(x);
        continue;
      }
    }

    if (len === 6) {
      // 1 1 1 1 1 1, 1 1 1 1 2, 1 1 1 2 1, 1 1 2 1 1, 1 2 1 1 1, 2 1 1 1 1
      // 1 1 1 3, 1 1 3 1, 1 3 1 1, 3 1 1 1
      const sum111111 = num[0] + num[1] + num[2] + num[3] + num[4] + num[5];
      if (sum111111 === x) {
        nums.push(x);
        continue;
      }

      const sum11112 = num[0] + num[1] + num[2] + num[3] + num[4] * 10 + num[5];
      if (sum11112 === x) {
        nums.push(x);
        continue;
      }

      const sum11121 = num[0] + num[1] + num[2] + num[3] * 10 + num[4] + num[5];
      if (sum11121 === x) {
        nums.push(x);
        continue;
      }

      const sum11211 = num[0] + num[1] + num[2] * 10 + num[3] + num[4] + num[5];
      if (sum11211 === x) {
        nums.push(x);
        continue;
      }

      const sum12111 = num[0] + num[1] * 10 + num[2] + num[3] + num[4] + num[5];
      if (sum12111 === x) {
        nums.push(x);
        continue;
      }

      const sum21111 = num[0] * 10 + num[1] + num[2] + num[3] + num[4] + num[5];
      if (sum21111 === x) {
        nums.push(x);
        continue;
      }

      const sum1113 = num[0] + num[1] + num[2] + num[3] * 100 + num[4] * 10 + num[5];
      if (sum1113 === x) {
        nums.push(x);
        continue;
      }

      const sum1131 = num[0] + num[1] + num[2] * 100 + num[3] * 10 + num[4] + num[5];
      if (sum1131 === x) {
        nums.push(x);
        continue;
      }

      const sum1311 = num[0] + num[1] * 100 + num[2] * 10 + num[3] + num[4] + num[5];
      if (sum1311 === x) {
        nums.push(x);
        continue;
      }

      const sum3111 = num[0] * 100 + num[1] * 10 + num[2] + num[3] + num[4] + num[5];
      if (sum3111 === x) {
        nums.push(x);
        continue;
      }

      // 2 1 1 2, 2 1 2 1, 2 2 1 1
      const sum2112 = num[0] * 10 + num[1] + num[2] + num[3] + num[4] * 10 + num[5];
      if (sum2112 === x) {
        nums.push(x);
        continue;
      }

      const sum2121 = num[0] * 10 + num[1] + num[2] + num[3] * 10 + num[4] + num[5];
      if (sum2121 === x) {
        nums.push(x);
        continue;
      }

      const sum2211 = num[0] * 10 + num[1] + num[2] * 10 + num[3] + num[4] + num[5];
      if (sum2211 === x) {
        nums.push(x);
        continue;
      }

      // 2 2 2
      const sum222 = num[0] * 10 + num[1] + num[2] * 10 + num[3] + num[4] * 10 + num[5];
      if (sum222 === x) {
        nums.push(x);
        continue;
      }

      // 1 2 3, 1 3 2, 2 1 3, 2 3 1, 3 1 2, 3 2 1, 3 3
      const sum123 = num[0] + num[1] * 10 + num[2] + num[3] * 100 + num[4] * 10 + num[5];
      if (sum123 === x) {
        nums.push(x);
        continue;
      }

      const sum132 = num[0] + num[1] * 100 + num[2] * 10 + num[3] + num[4] * 10 + num[5];
      if (sum132 === x) {
        nums.push(x);
        continue;
      }

      const sum213 = num[0] * 10 + num[1] + num[2] + num[3] * 100 + num[4] * 10 + num[5];
      if (sum213 === x) {
        nums.push(x);
        continue;
      }

      const sum231 = num[0] * 10 + num[1] + num[2] * 100 + num[3] * 10 + num[4] + num[5];
      if (sum231 === x) {
        nums.push(x);
        continue;
      }

      const sum312 = num[0] * 100 + num[1] * 10 + num[2] + num[3] + num[4] * 10 + num[5];
      if (sum312 === x) {
        nums.push(x);
        continue;
      }

      const sum321 = num[0] * 100 + num[1] * 10 + num[2] + num[3] * 10 + num[4] + num[5];
      if (sum321 === x) {
        nums.push(x);
        continue;
      }

      const sum33 = num[0] * 100 + num[1] * 10 + num[2] + num[3] * 100 + num[4] * 10 + num[5];
      if (sum33 === x) {
        nums.push(x);
        continue;
      }
    }

    if (len === 7) {
      nums.push(x);
      continue;
    }
  }

  result = nums.reduce((s, x) => s + x * x, 0);
  return result;
};

var n = 10;
var expected = 182;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 37;
var expected = 1478;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 45;
var expected = 3503;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 756;
var expected = 2725885;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 1000;
var expected = 10804657;
var result = punishmentNumber(n);
console.log(result, result === expected);
