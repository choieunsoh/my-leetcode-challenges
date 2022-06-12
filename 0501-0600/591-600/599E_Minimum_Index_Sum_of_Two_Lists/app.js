// https://leetcode.com/problems/minimum-index-sum-of-two-lists/
// 599. Minimum Index Sum of Two Lists
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const match = {};

  for (let i = 0; i < list2.length; i++) {
    const index = list1.indexOf(list2[i]);
    if (index !== -1) {
      if (match[index + i] === undefined) match[index + i] = [];
      match[index + i].push(list2[i]);
    }
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (const key in match) {
    if (Number(key) < min) min = Number(key);
  }

  return match[min];
};

var list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
  list2 = [
    'Piatti',
    'The Grill at Torrey Pines',
    'Hungry Hunter Steakhouse',
    'Shogun',
  ];
var expected = ['Shogun'];
var result = findRestaurant(list1, list2);
console.log(result, result.join() === expected.join());

var list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
  list2 = ['KFC', 'Shogun', 'Burger King'];
var expected = ['Shogun'];
var result = findRestaurant(list1, list2);
console.log(result, result.join() === expected.join());

var list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
  list2 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];
var expected = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];
var result = findRestaurant(list1, list2);
console.log(result, result.join() === expected.join());
