// 1349. Maximum Students Taking Exam
// https://leetcode.com/problems/maximum-students-taking-exam/
/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
  const rows = seats.length;
  const cols = seats[0].length;
  const mask = 1 << cols;
  const dp = Array.from({ length: rows + 1 }, () => new Array(mask).fill(0));

  for (let r = 1; r <= rows; r++) {
    const x = toBits(r - 1);
    for (let m = 0; m < mask; m++) {
      if (m !== 0 && (x & m) === 0) continue;
      if (m & (m >> 1)) continue;

      for (let pre = 0; pre < mask; pre++) {
        if (pre & (pre >> 1)) continue;
        if ((pre >> 1) & m) continue;
        if ((pre << 1) & m) continue;

        dp[r][m] = Math.max(dp[r][m], dp[r - 1][pre] + onBits(m & x));
      }
    }
  }

  return Math.max.apply(Math, dp[rows]);

  function onBits(x) {
    let count = 0;
    while (x != 0) {
      if (x & 1) count++;
      x = x >> 1;
    }
    return count;
  }

  function toBits(r) {
    let x = 0;
    for (let c = 0; c < cols; c++) {
      if (seats[r][c] == '#') continue;
      x = x ^ (1 << c);
    }
    return x;
  }
};

var seats = [
  ['#', '.', '#', '#', '.', '#'],
  ['.', '#', '#', '#', '#', '.'],
  ['#', '.', '#', '#', '.', '#'],
];
var expected = 4;
var result = maxStudents(seats);
console.log(result, result === expected);

var seats = [
  ['.', '#'],
  ['#', '#'],
  ['#', '.'],
  ['#', '#'],
  ['.', '#'],
];
var expected = 3;
var result = maxStudents(seats);
console.log(result, result === expected);

var seats = [
  ['#', '.', '.', '.', '#'],
  ['.', '#', '.', '#', '.'],
  ['.', '.', '#', '.', '.'],
  ['.', '#', '.', '#', '.'],
  ['#', '.', '.', '.', '#'],
];
var expected = 10;
var result = maxStudents(seats);
console.log(result, result === expected);
