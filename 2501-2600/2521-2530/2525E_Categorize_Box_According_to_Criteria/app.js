// 2525. Categorize Box According to Criteria
// https://leetcode.com/problems/categorize-box-according-to-criteria/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const isBulky = length >= 1e4 || width >= 1e4 || height >= 1e4 || length * width * height >= 1e9;
  const isHeavy = mass >= 100;
  if (isBulky && isHeavy) return 'Both';
  if (!isBulky && !isHeavy) return 'Neither';
  if (isHeavy) return 'Heavy';
  return 'Bulky';
};

var length = 1000,
  width = 35,
  height = 700,
  mass = 300;
var expected = 'Heavy';
var result = categorizeBox(length, width, height, mass);
console.log(result, result === expected);

var length = 200,
  width = 50,
  height = 800,
  mass = 50;
var expected = 'Neither';
var result = categorizeBox(length, width, height, mass);
console.log(result, result === expected);

var length = 3223,
  width = 1271,
  height = 2418,
  mass = 749;
var expected = 'Both';
var result = categorizeBox(length, width, height, mass);
console.log(result, result === expected);
