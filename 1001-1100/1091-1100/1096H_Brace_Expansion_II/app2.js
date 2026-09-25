// 1096. Brace Expansion II
// https://leetcode.com/problems/brace-expansion-ii/description/
// T.C.: O(n * m)
// S.C.: O(n * m)
/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  const op = []; // Operator stack
  const stk = []; // Set stack

  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i];
    if (ch === ',') {
      // Keep popping operators from the top of the stack until the stack is empty or its top is not a multiplication sign
      while (op.length > 0 && op[op.length - 1] === '*') {
        ope();
      }
      op.push('+');
    } else if (ch === '{') {
      // First determine whether a multiplication sign needs to be added, then push { onto the operator stack
      if (i > 0 && (expression[i - 1] === '}' || /[a-z]/.test(expression[i - 1]))) {
        op.push('*');
      }
      op.push('{');
    } else if (ch === '}') {
      // Keep popping operators from the top of the stack until its top is {
      while (op.length > 0 && op[op.length - 1] !== '{') {
        ope();
      }
      op.pop();
    } else {
      // First determine whether a multiplication sign needs to be added, then push the newly constructed set onto the set stack
      if (i > 0 && (expression[i - 1] === '}' || /[a-z]/.test(expression[i - 1]))) {
        op.push('*');
      }
      stk.push(new Set([ch]));
    }
  }

  while (op.length > 0) {
    ope();
  }

  return Array.from(stk[stk.length - 1]).sort();

  // Pop the operator at the top of the stack and perform the calculation
  function ope() {
    const l = stk.length - 2,
      r = stk.length - 1;
    if (op[op.length - 1] === '+') {
      // Union operation
      for (const item of stk[r]) {
        stk[l].add(item);
      }
    } else {
      // Cartesian product operation
      const tmp = new Set();
      for (const left of stk[l]) {
        for (const right of stk[r]) {
          tmp.add(left + right);
        }
      }
      stk[l] = tmp;
    }
    op.pop();
    stk.pop();
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
