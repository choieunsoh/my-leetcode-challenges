// 2307. Check for Contradictions in Equations
// https://leetcode.com/problems/check-for-contradictions-in-equations/description/
// T.C.: O(N * α(N))
// S.C.: O(N)
// Approach: Weighted Union-Find with Path Compression
// We use a Union-Find (Disjoint Set Union, DSU) structure augmented with weights to handle ratios between variables.
// Each variable is assigned a parent and a weight representing its ratio to the parent.
// Path compression is employed during the find operation to flatten the structure, optimizing future queries.
// When uniting two variables, we adjust the weights to maintain the correct ratios.
// If a contradiction is detected (i.e., an existing ratio does not match the new ratio within a tolerance), we return true.
// T - O(N * α(N)): Nearly linear time complexity, where α is the inverse Ackermann function, due to path compression.
// S - O(N): Space complexity for storing the parent and weight mappings, where N is the number of unique variables.

class UnionFind {
  constructor() {
    this.parent = new Map(); // Maps each variable to its parent
    this.weight = new Map(); // Maps each variable to the ratio relative to its parent
  }

  // Initialize the variable in the Union-Find structure if it's not already present
  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
      this.weight.set(x, 1.0);
    }
  }

  // Find the root parent of x with path compression, updating weights accordingly
  find(x) {
    if (this.parent.get(x) !== x) {
      const originalParent = this.parent.get(x);
      const root = this.find(originalParent);
      this.parent.set(x, root);
      this.weight.set(x, this.weight.get(x) * this.weight.get(originalParent));
    }
    return this.parent.get(x);
  }

  // Union the variables x and y with the given ratio (x / y = value)
  union(x, y, value) {
    this.add(x);
    this.add(y);

    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      // Merge the trees by attaching rootX under rootY
      this.parent.set(rootX, rootY);
      // Adjust the weight to maintain the correct ratio
      // weight[x] * value = weight[y]
      this.weight.set(rootX, (this.weight.get(y) * value) / this.weight.get(x));
      return false; // No contradiction
    } else {
      // Check for contradiction by verifying the existing ratio
      const expected = this.weight.get(x) / this.weight.get(y);
      if (Math.abs(expected - value) > 1e-5) {
        return true; // Contradiction found
      }
      return false; // No contradiction
    }
  }
}

/**
 * Determines if there exists a contradiction in the given equations.
 *
 * @param {string[][]} equations - A 2D array of strings where each subarray represents an equation [Ai, Bi].
 * @param {number[]} values - An array of real numbers where values[i] represents Ai / Bi = values[i].
 * @return {boolean} - Returns true if there is a contradiction, otherwise false.
 */
function checkContradictions(equations, values) {
  const uf = new UnionFind();

  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const value = values[i];
    const contradiction = uf.union(A, B, value);
    if (contradiction) {
      return true; // Contradiction detected
    }
  }

  return false; // No contradictions found
}

var equations = [
    ['a', 'b'],
    ['b', 'c'],
    ['a', 'c'],
  ],
  values = [3, 0.5, 1.5];
var expected = false;
var result = checkContradictions(equations, values);
console.log(result, result === expected);

var equations = [
    ['le', 'et'],
    ['le', 'code'],
    ['code', 'et'],
  ],
  values = [2, 5, 0.5];
var expected = true;
var result = checkContradictions(equations, values);
console.log(result, result === expected);

var equations = [
    ['oxlp', 'rxekw'],
    ['wusp', 'py'],
    ['jiljl', 'ocki'],
    ['wna', 'ahd'],
    ['btzo', 'oxlp'],
    ['tf', 'gdzjl'],
    ['btzo', 'xfzuo'],
    ['jiljl', 'gdzjl'],
    ['hpic', 'wusp'],
    ['z', 'qs'],
    ['tkgna', 'wna'],
    ['wusp', 'btzo'],
    ['ocki', 'z'],
    ['ttfkc', 'py'],
    ['xfzuo', 'xfzuo'],
    ['ahd', 'xfzuo'],
    ['ocki', 'py'],
    ['jnsz', 'py'],
    ['wna', 'wna'],
    ['wusp', 'wusp'],
    ['ttfkc', 'py'],
    ['qs', 'dci'],
    ['wusp', 'wusp'],
    ['btzo', 'oxlp'],
    ['tf', 'tf'],
    ['ocki', 'ocki'],
    ['z', 'qs'],
    ['qs', 'dci'],
    ['z', 'qs'],
    ['btzo', 'btzo'],
  ],
  values = [
    8.32, 9.23, 2.96, 8.64, 8.66, 1.55, 1.5, 4.12, 7.2, 9.26, 5.62, 8.07, 9.75, 2.03, 1, 1.08, 3.96, 8.41, 1, 1, 1.35,
    6.59, 1, 7.47, 1, 1, 9.26, 6.59, 9.26, 1,
  ];
var expected = true;
var result = checkContradictions(equations, values);
console.log(result, result === expected);
