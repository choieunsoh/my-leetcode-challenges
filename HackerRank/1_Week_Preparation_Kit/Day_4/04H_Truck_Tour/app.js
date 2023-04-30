// Truck Tour
// https://www.hackerrank.com/challenges/truck-tour/problem
/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
  // Write your code here
  const pumps = [...petrolpumps, ...petrolpumps];
  const n = petrolpumps.length;
  let fuel = 0;
  let start = 0;
  let count = 0;
  for (let i = 0; i < 2 * n; i++) {
    const [petro, dist] = pumps[i];
    fuel += petro - dist;
    count++;
    if (fuel < 0) {
      fuel = 0;
      start = i + 1;
      count = 0;
    }
    if (count >= n) break;
  }
  return start;
}

var petrolpumps = [
  [1, 5],
  [10, 3],
  [3, 4],
];
var expected = 1;
var result = truckTour(petrolpumps);
console.log(result, result === expected);
