// Tower Breakers
// https://www.hackerrank.com/challenges/tower-breakers-1/problem
function towerBreakers(n, m) {
  // Write your code here
  return n % 2 === 0 || m === 1 ? 2 : 1;
}
