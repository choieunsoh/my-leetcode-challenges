/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const counter = new Map();
  let maxRows = 0;
  const result = [];
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    if (result.length <= count) result.push([]);
    result[count].push(num);
    counter.set(num, count + 1);
  }
  return result;
};

function compare(A, B) {
  for (let i = 0; i < A.length; i++) {
    if (A[i].sort((a, b) => a - b).join() !== B[i].sort((a, b) => a - b).join()) return false;
  }
  return true;
}

var nums = [1, 3, 4, 1, 2, 3, 1];
var expected = [[1, 3, 4, 2], [1, 3], [1]];
var result = findMatrix(nums);
console.log(result, compare(result, expected));

var nums = [1, 2, 3, 4];
var expected = [[4, 3, 2, 1]];
var result = findMatrix(nums);
console.log(result, compare(result, expected));
