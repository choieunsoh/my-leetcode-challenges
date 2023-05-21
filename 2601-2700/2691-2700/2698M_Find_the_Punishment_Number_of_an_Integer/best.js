// 2698. Find the Punishment Number of an Integer
// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
const set = new Set();
if (set.size === 0) {
  generateNumSeq();
}

function generateNumSeq() {
  function isPunishmentNumber(str, num) {
    const n = str.length;
    let yes = false;
    function dfs(start, sum) {
      if (yes) return;
      if (start === n) {
        if (sum === num) yes = true;
        return;
      }
      for (let i = start + 1; i <= str.length; i++) {
        const substring = str.slice(start, i);
        dfs(i, sum + +substring);
      }
    }
    dfs(0, 0);
    return yes;
  }

  for (let i = 1; i <= 1000; i++) {
    const square = i * i;
    if (isPunishmentNumber(square.toString(), i)) {
      set.add(i);
    }
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    if (set.has(i)) {
      s += i * i;
    }
  }
  return s;
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
