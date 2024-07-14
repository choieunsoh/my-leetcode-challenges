// 726. Number of Atoms
// https://leetcode.com/problems/number-of-atoms/description/
// T.C.: O(n + k log k)
// S.C.: O(n)
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  const n = formula.length;
  const stack = [];
  const parentheses = [];
  for (let i = 0; i < n; i++) {
    if (formula[i] === '(') {
      stack.push(i);
    } else if (formula[i] === ')') {
      const j = stack.pop();
      const count = countAtoms(formula, i);
      parentheses.push([j, i, count]);
    }
  }

  const prefixMultiply = new Array(n).fill(1);
  for (const [start, end, multiply] of parentheses) {
    prefixMultiply[start] *= multiply;
    prefixMultiply[end] *= -multiply;
  }
  for (let i = 1; i < n; i++) {
    if (prefixMultiply[i] < 0) {
      prefixMultiply[i] = prefixMultiply[i - 1] / -prefixMultiply[i];
    } else {
      prefixMultiply[i] *= prefixMultiply[i - 1];
    }
  }

  const atoms = new Map();
  for (let i = 0; i < n; i++) {
    let atom = formula[i];
    if (!isUpper(atom)) continue;

    while (i + 1 < n && isLower(formula[i + 1])) {
      atom += formula[i + 1];
      i++;
    }

    const multiply = prefixMultiply[i];
    const count = countAtoms(formula, i);
    atoms.set(atom, (atoms.get(atom) ?? 0) + multiply * count);
  }

  const result = [...atoms.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1));
  return result.reduce((str, [char, count]) => str + char + (count > 1 ? count : ''), '');

  function isDigit(ch) {
    return ch >= 0 && ch <= 9;
  }

  function isLower(ch) {
    return ch >= 'a' && ch <= 'z';
  }

  function isUpper(ch) {
    return ch >= 'A' && ch <= 'Z';
  }

  function countAtoms(formula, i) {
    let count = 0;
    while (i + 1 < formula.length && isDigit(formula[i + 1])) {
      count = count * 10 + Number(formula[i + 1]);
      i++;
    }
    if (count === 0) count = 1;
    return count;
  }
};

var formula = 'H2O';
var expected = 'H2O';
var result = countOfAtoms(formula);
console.log(result, result === expected);

var formula = 'Mg(OH)2';
var expected = 'H2MgO2';
var result = countOfAtoms(formula);
console.log(result, result === expected);

var formula = 'K4(ON(SO3)2)2';
var expected = 'K4N2O14S4';
var result = countOfAtoms(formula);
console.log(result, result === expected);

var formula = '((HHe28Be26He)9)34';
var expected = 'Be7956 H306 He8874';
var result = countOfAtoms(formula);
console.log(result, result === expected.replace(/ /g, ''));

var formula = '((HHe28Be26He)9C)34';
var expected = 'Be7956C34H306He8874';
var result = countOfAtoms(formula);
console.log(result, result === expected.replace(/ /g, ''));
