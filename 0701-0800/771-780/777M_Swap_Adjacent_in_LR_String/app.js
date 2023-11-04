// 777. Swap Adjacent in LR String
// https://leetcode.com/problems/swap-adjacent-in-lr-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  const n = start.length;
  let i = 0;
  let j = 0;
  while (i < n || j < n) {
    while (start[i] === 'X') i++;
    while (end[j] === 'X') j++;

    if (start[i] !== end[j]) return false;
    if (start[i] === 'L' && i < j) return false;
    if (start[i] === 'R' && i > j) return false;

    i++;
    j++;
  }

  return true;
};

var start = 'RXXLRXRXL',
  end = 'XRLXXRRLX';
var expected = true;
var result = canTransform(start, end);
console.log(result, result === expected);

var start = 'X',
  end = 'L';
var expected = false;
var result = canTransform(start, end);
console.log(result, result === expected);

var start = 'XRRXRX',
  end = 'RXLRRX';
var expected = false;
var result = canTransform(start, end);
console.log(result, result === expected);

var start = 'LXXLXRLXXL',
  end = 'XLLXRXLXLX';
var expected = false;
var result = canTransform(start, end);
console.log(result, result === expected);

var start = 'XXXLXXXXXX',
  end = 'XXXLXXXXXX';
var expected = true;
var result = canTransform(start, end);
console.log(result, result === expected);

var start = 'XXXXXLXXXX',
  end = 'LXXXXXXXXX';
var expected = true;
var result = canTransform(start, end);
console.log(result, result === expected);
