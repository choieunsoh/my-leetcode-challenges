// 2011. Final Value of Variable After Performing Operations
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let value = 0;
  for (const op of operations) {
    if (op === '++X' || op === 'X++') {
      value++;
    } else {
      value--;
    }
  }
  return value;
};

var operations = ['--X', 'X++', 'X++'];
var expected = 1;
var result = finalValueAfterOperations(operations);
console.log(result, result === expected);

var operations = ['++X', '++X', 'X++'];
var expected = 3;
var result = finalValueAfterOperations(operations);
console.log(result, result === expected);

var operations = ['X++', '++X', '--X', 'X--'];
var expected = 0;
var result = finalValueAfterOperations(operations);
console.log(result, result === expected);
