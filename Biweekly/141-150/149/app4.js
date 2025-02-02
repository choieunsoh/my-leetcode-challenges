/**
 * @param {string} caption
 * @return {string}
 */
var minCostGoodCaption = function (caption) {
  return '';
};

var caption = 'cdcd';
var expected = 'cccc';
var result = minCostGoodCaption(caption);
console.log(result, result === expected);

var caption = 'aca';
var expected = 'aaa';
var result = minCostGoodCaption(caption);
console.log(result, result === expected);

var caption = 'bc';
var expected = '';
var result = minCostGoodCaption(caption);
console.log(result, result === expected);
