// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} crews
 * @param {number[]} repairs
 * @return {number}
 */
function getMinCost(crews, repairs) {
  crews.sort((a, b) => a - b);
  repairs.sort((a, b) => a - b);
  let cost = 0;
  for (let i = 0; i < crews.length; i++) {
    cost += Math.abs(crews[i] - repairs[i]);
  }
  return cost;
}

var crews = [1, 3, 5],
  repairs = [3, 5, 7];
var expected = 6;
var result = getMinCost(crews, repairs);
console.log(result, result === expected);

var crews = [5, 3, 1, 4, 6],
  repairs = [9, 8, 3, 15, 1];
var expected = 17;
var result = getMinCost(crews, repairs);
console.log(result, result === expected);

var crews = [5, 1, 4, 2],
  repairs = [4, 7, 9, 10];
var expected = 18;
var result = getMinCost(crews, repairs);
console.log(result, result === expected);
