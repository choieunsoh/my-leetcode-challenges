// 726. Number of Atoms
// https://leetcode.com/problems/number-of-atoms/description/
// T.C.: O(n + k log k)
// S.C.: O(n)
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let index = 0;
  const atomCountMap = parseFormula();
  const result = [...atomCountMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  return result.reduce((str, [atom, count]) => str + atom + (count > 1 ? count : ''), '');

  // Recursive function to parse a formula section and return an atom count map
  function parseFormula() {
    const atomCount = new Map();
    while (index < formula.length) {
      if (formula[index] === '(') {
        index++;
        const innerMap = parseFormula();
        index++; // skip ')'
        const count = parseNumber();
        multiplyMap(innerMap, count);
        mergeMaps(atomCount, innerMap);
      } else if (formula[index] === ')') {
        break;
      } else {
        const atom = parseAtom();
        const count = parseNumber();
        atomCount.set(atom, (atomCount.get(atom) ?? 0) + count);
      }
    }
    return atomCount;
  }

  // Function to parse atom name
  function parseAtom() {
    let atom = formula[index++];
    while (index < formula.length && formula[index] >= 'a' && formula[index] <= 'z') {
      atom += formula[index++];
    }
    return atom;
  }

  // Function to parse number following an atom or parenthesis
  function parseNumber() {
    let num = 0;
    while (index < formula.length && formula[index] >= '0' && formula[index] <= '9') {
      num = num * 10 + (formula[index++] - '0');
    }
    return num || 1;
  }

  // Function to multiply counts in a map by a given multiplier
  function multiplyMap(map, multiplier) {
    for (const [key, value] of map.entries()) {
      map.set(key, value * multiplier);
    }
  }

  // Function to merge counts from one map into another
  function mergeMaps(target, source) {
    for (const [key, value] of source.entries()) {
      target.set(key, (target.get(key) ?? 0) + value);
    }
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
