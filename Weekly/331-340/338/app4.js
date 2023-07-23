/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
var collectTheCoins = function (coins, edges) {};

var coins = [1, 0, 0, 0, 0, 1],
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];
var expected = 2;
var result = collectTheCoins(coins, edges);
console.log(result, result === expected);

var coins = [0, 0, 0, 1, 1, 0, 0, 1],
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [5, 6],
    [5, 7],
  ];
var expected = 2;
var result = collectTheCoins(coins, edges);
console.log(result, result === expected);
