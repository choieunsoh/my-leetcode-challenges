// https://leetcode.com/problems/valid-mountain-array/
// 941. Valid Mountain Array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let goDown = false;
  let goUp = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      if (!goUp) return false;
      goDown = true;
      console.log(i, 'Down');
    } else if (arr[i + 1] === arr[i]) {
      return false;
    } else {
      if (goDown) return false;
      goUp = true;
      console.log(i, 'Up');
    }
  }

  return goUp && goDown;
};

var arr = [2, 1];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [3, 5, 5];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [0, 3, 2, 1];
var expected = true;
console.log(validMountainArray(arr), expected);

var arr = [5, 3, 2, 1];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [1, 2, 3, 4];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [0, 1, 2, 4, 2, 1];
var expected = true;
console.log(validMountainArray(arr), expected);
