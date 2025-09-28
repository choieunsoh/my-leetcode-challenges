// 401. Binary Watch
// https://leetcode.com/problems/binary-watch/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) {
    return [];
  }

  const H = [8, 4, 2, 1];
  const M = [32, 16, 8, 4, 2, 1];

  let considered = 0;
  const result = [];
  while (considered <= turnedOn) {
    const minutes = combine(M, considered, 60);
    const hours = combine(H, turnedOn - considered, 12);

    for (let i = 0; i < hours.length; ++i) {
      for (let j = 0; j < minutes.length; ++j) {
        result.push(hours[i] + ':' + minutes[j].padStart(2, '0'));
      }
    }
    considered++;
  }
  return result;

  function combine(arr, size, max) {
    const result = new Set();
    backtrack(0, 0, 0);
    return [...result];

    function backtrack(start, sum, count) {
      if (count === size) {
        count = 0;
        return result.add(sum + '');
      }
      if (start >= arr.length) {
        return;
      }
      for (let i = start; i < arr.length; i++) {
        if (sum + arr[i] < max) {
          backtrack(i + 1, sum + arr[i], count + 1);
        }
      }
    }
  }
};

var expected = ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'];
var result = readBinaryWatch(turnedOn);
console.log(result, result.join() === expected.join());

var turnedOn = 9;
var expected = [];
var result = readBinaryWatch(turnedOn);
console.log(result, result.join() === expected.join());
