// 990. Satisfiability of Equality Equations
// https://leetcode.com/problems/satisfiability-of-equality-equations/
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const parent = {}; // node: parent
  const rank = {}; // node: rank

  const find = (x) => {
    // create parent && rank
    if (!parent[x]) {
      parent[x] = x; // initialze varaible: variable
      rank[x] = 0;
    }

    if (parent[x] !== x) parent[x] = find(parent[x]);

    return parent[x];
  };

  const union = (x, y) => {
    const [X, Y] = [find(x), find(y)];

    if (X === Y) return;

    if (rank[X] < rank[Y]) parent[X] = Y;
    else if (rank[Y] < rank[X]) {
      parent[Y] = X;
    } else {
      parent[Y] = X;
      rank[X]++;
    }
  };

  // handle == : connected components
  // if a = b, b = c, c = d then a, b, c, d are in a single component
  for (const [x, operation, , y] of equations) {
    if (operation === '=') union(x, y);
  }

  // handle != : disconnected components
  for (const [x, operation, , y] of equations) {
    const [X, Y] = [find(x), find(y)];

    // False: if != && same parent
    // if same parent, equation is NOT valid
    if (operation === '!' && X === Y) return false;
  }

  return true;
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
