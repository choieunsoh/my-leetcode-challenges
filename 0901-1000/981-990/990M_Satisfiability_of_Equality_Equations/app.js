// 990. Satisfiability of Equality Equations
// https://leetcode.com/problems/satisfiability-of-equality-equations/
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const a = 'a'.charCodeAt(0);
  const parents = Array.from({ length: 26 }, (_, i) => i);

  for (const eq of equations) {
    if (eq.charAt(1) === '=') {
      parents[find(eq.charCodeAt(0) - a)] = find(eq.charCodeAt(3) - a);
    }
  }

  for (const eq of equations) {
    if (eq.charAt(1) === '!' && find(eq.charCodeAt(0) - a) === find(eq.charCodeAt(3) - a)) {
      return false;
    }
  }
  return true;

  function find(x) {
    if (parents[x] === x) {
      return x;
    }
    return (parents[x] = find(parents[x]));
  }
};

var equations = ['a==b', 'b!=a'];
var expected = false;
var result = equationsPossible(equations);
console.log(result, result === expected);

var equations = ['b==a', 'a==b'];
var expected = true;
var result = equationsPossible(equations);
console.log(result, result === expected);

var equations = ['c==c', 'b==d', 'x!=z'];
var expected = true;
var result = equationsPossible(equations);
console.log(result, result === expected);
