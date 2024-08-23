// 592. Fraction Addition and Subtraction
// https://leetcode.com/problems/fraction-addition-and-subtraction/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const n = expression.length;
  const numerators = [];
  const denominators = [];
  let sign = 1;
  let num = 0;
  for (let i = 0; i <= n; i++) {
    const char = expression[i];
    if (i === n || char === '+' || char === '-') {
      if (numerators.length > 0) {
        denominators.push(num || 1);
      }
      num = 0;
      sign = char === '+' ? 1 : -1;
    } else if (char === '/') {
      numerators.push(sign * num);
      num = 0;
    } else {
      num = num * 10 + Number(char);
    }
  }

  let gcd = 1;
  let numerator = numerators[0];
  let denominator = denominators[0];
  for (let i = 1; i < denominators.length; i++) {
    const num = numerators[i];
    const den = denominators[i];
    numerator = numerator * den + num * denominator;
    denominator = denominator * den;
    gcd = calcGCD(numerator, denominator);
  }

  gcd = Math.abs(gcd);
  return `${numerator / gcd}/${denominator / gcd}`;

  function calcGCD(a, b) {
    if (b === 0) return a;
    return calcGCD(b, a % b);
  }
};

var expression = '-1/2+1/2';
var expected = '0/1';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '-1/2+1/2+1/3';
var expected = '1/3';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '1/3-1/2';
var expected = '-1/6';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '0/1';
var expected = '0/1';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '0/1+0/1000';
var expected = '0/1';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '1/5+1/7';
var expected = '12/35';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '5/1+7/1';
var expected = '12/1';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '-5/1-7/1';
var expected = '-12/1';
var result = fractionAddition(expression);
console.log(result, result === expected);

var expression = '2/1-1/3';
var expected = '5/3';
var result = fractionAddition(expression);
console.log(result, result === expected);
