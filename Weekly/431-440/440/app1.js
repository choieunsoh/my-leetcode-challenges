/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let n = fruits.length;
  let unplaced = n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (baskets[j] >= fruits[i]) {
        unplaced--;
        baskets[j] = 0;
        break;
      }
    }
  }
  return unplaced;
};

var fruits = [4, 2, 5],
  baskets = [3, 5, 4];
var expected = 1;
var result = numOfUnplacedFruits(fruits, baskets);
console.log(result, result === expected);

var fruits = [3, 6, 1],
  baskets = [6, 4, 7];
var expected = 0;
var result = numOfUnplacedFruits(fruits, baskets);
console.log(result, result === expected);
