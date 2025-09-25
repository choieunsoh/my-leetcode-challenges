// 3606. Coupon Code Validator
// https://leetcode.com/problems/coupon-code-validator/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  const result = [];
  const categories = new Set(['electronics', 'grocery', 'pharmacy', 'restaurant']);
  const n = code.length;
  const validCode = /^[A-Za-z0-9_]+$/;
  for (let i = 0; i < n; i++) {
    if (!validCode.test(code[i])) continue;
    if (!isActive[i]) continue;
    if (!categories.has(businessLine[i])) continue;
    result.push([businessLine[i], code[i]]);
  }
  return result
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
      return a[1] < b[1] ? -1 : 1;
    })
    .map(([, code]) => code);
};

var code = ['SAVE20', '', 'PHARMA5', 'SAVE@20'],
  businessLine = ['restaurant', 'grocery', 'pharmacy', 'restaurant'],
  isActive = [true, true, true, true];
var expected = ['PHARMA5', 'SAVE20'];
var result = validateCoupons(code, businessLine, isActive);
console.log(result, result.join() === expected.join());

var code = ['GROCERY15', 'ELECTRONICS_50', 'DISCOUNT10'],
  businessLine = ['grocery', 'electronics', 'invalid'],
  isActive = [false, true, true];
var expected = ['ELECTRONICS_50'];
var result = validateCoupons(code, businessLine, isActive);
console.log(result, result.join() === expected.join());

var code = ['MI', 'b_'],
  businessLine = ['pharmacy', 'pharmacy'],
  isActive = [true, true];
var expected = ['MI', 'b_'];
var result = validateCoupons(code, businessLine, isActive);
console.log(result, result.join() === expected.join());
