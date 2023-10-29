// 458. Poor Pigs
// https://leetcode.com/problems/poor-pigs/
// T.C.: O(1)
// S.C.: O(1)
// please see https://leetcode.com/problems/poor-pigs/solutions/94273/solution-with-detailed-explanation/
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  const rounds = 1 + Math.floor(minutesToTest / minutesToDie);
  let pigs = Math.log(buckets) / Math.log(rounds);
  pigs = Math.round(pigs * 100) / 100;
  return Math.ceil(pigs);
};

var buckets = 4,
  minutesToDie = 15,
  minutesToTest = 15;
var expected = 2;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 4,
  minutesToDie = 15,
  minutesToTest = 30;
var expected = 2;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 8,
  minutesToDie = 15,
  minutesToTest = 40;
var expected = 2;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 2,
  minutesToDie = 15,
  minutesToTest = 15;
var expected = 1;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 4,
  minutesToDie = 15,
  minutesToTest = 15;
var expected = 2;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 8,
  minutesToDie = 15,
  minutesToTest = 15;
var expected = 3;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 16,
  minutesToDie = 15,
  minutesToTest = 15;
var expected = 4;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 1000,
  minutesToDie = 15,
  minutesToTest = 60;
var expected = 5;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);

var buckets = 123,
  minutesToDie = 1,
  minutesToTest = 4;
var expected = 3;
var result = poorPigs(buckets, minutesToDie, minutesToTest);
console.log(result, result === expected);
