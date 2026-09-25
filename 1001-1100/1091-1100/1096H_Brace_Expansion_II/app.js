// 1096. Brace Expansion II
// https://leetcode.com/problems/brace-expansion-ii/description/
// T.C.: O(n * m)
// S.C.: O(n * m)
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  let idx = 0;
  const n = expression.length;
  const result = Array.from(expr());
  return result.sort();

  // Check whether it is a letter
  function isLetter(c) {
    return c >= 'a' && c <= 'z';
  }

  // item -> letter | { expr }
  function item() {
    let ret = new Set();
    if (expression[idx] === '{') {
      idx++;
      ret = expr();
    } else {
      ret = new Set([expression[idx]]);
    }
    idx++;
    return ret;
  }

  // term -> item | item term
  function term() {
    // Initialize an empty set and take its Cartesian product with subsequent results
    let ret = new Set(['']);
    // An item starts with { or a lowercase letter; continue matching only when this condition is met
    while (idx < n && (expression[idx] === '{' || isLetter(expression[idx]))) {
      const sub = item();
      const tmp = new Set();
      for (const left of ret) {
        for (const right of sub) {
          tmp.add(left + right);
        }
      }
      ret = tmp;
    }
    return ret;
  }

  // expr -> term | term, expr
  function expr() {
    const ret = new Set();
    while (true) {
      // Take the union with the result of term()
      for (const item of term()) {
        ret.add(item);
      }
      // Continue if a comma is matched; otherwise, stop matching
      if (idx < n && expression[idx] === ',') {
        idx++;
        continue;
      } else {
        break;
      }
    }
    return ret;
  }
};

var expression = '{a,b}{c,{d,e}}';
var expected = ['ac', 'ad', 'ae', 'bc', 'bd', 'be'];
var result = braceExpansionII(expression);
console.log(result, result.join() === expected.join());

var expression = '{{a,z},a{b,c},{ab,z}}';
var expected = ['a', 'ab', 'ac', 'z'];
var result = braceExpansionII(expression);
console.log(result, result.join() === expected.join());
