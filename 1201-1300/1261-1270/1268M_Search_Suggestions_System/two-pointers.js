// 1268. Search Suggestions System
// https://leetcode.com/problems/search-suggestions-system/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();

  const result = [];
  let left = 0;
  let right = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    const letter = searchWord[i];

    while (left <= right && products[left][i] !== letter) {
      left++;
    }
    while (left <= right && products[right][i] !== letter) {
      right--;
    }
    const wordCount = right - left + 1;
    result.push([]);
    for (let j = 0; j < Math.min(3, wordCount); j++) {
      result[i].push(products[left + j]);
    }
  }

  return result;
};

var products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
  searchWord = 'mouse';
var expected = [
  ['mobile', 'moneypot', 'monitor'],
  ['mobile', 'moneypot', 'monitor'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
];
var result = suggestedProducts(products, searchWord);
console.log(result, result.join() === expected.join());

var products = ['havana'],
  searchWord = 'havana';
var expected = [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']];
var result = suggestedProducts(products, searchWord);
console.log(result, result.join() === expected.join());
