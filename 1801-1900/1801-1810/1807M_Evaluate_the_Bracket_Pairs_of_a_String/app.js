// 1807. Evaluate the Bracket Pairs of a String
// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/description/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const dict = new Map();
  for (const [key, value] of knowledge) {
    dict.set(key, value);
  }

  let addKey = false;
  let key = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      addKey = true;
    } else if (c === ')') {
      if (dict.has(key)) {
        result += dict.get(key);
      } else {
        result += '?';
      }
      addKey = false;
      key = '';
    } else if (addKey) {
      key += c;
    } else {
      result += c;
    }
  }
  return result;
};

var s = '(name)is(age)yearsold',
  knowledge = [
    ['name', 'bob'],
    ['age', 'two'],
  ];
var expected = 'bobistwoyearsold';
var result = evaluate(s, knowledge);
console.log(result, result === expected);

var s = 'hi(name)',
  knowledge = [['a', 'b']];
var expected = 'hi?';
var result = evaluate(s, knowledge);
console.log(result, result === expected);

var s = '(a)(a)(a)aaa',
  knowledge = [['a', 'yes']];
var expected = 'yesyesyesaaa';
var result = evaluate(s, knowledge);
console.log(result, result === expected);
