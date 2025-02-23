// 3463. Check If Digits Are Equal in String After Operations II
// https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  // Step 1: Initialize Variables
  const size = s.length;
  const X = size - 2;
  let x = 0;
  let y = 0;

  // Step 2: Compute Alternating Sum Using Binomial Coefficients
  for (let j = 0; j <= X; j++) {
    const coeff = binomialMod10(X, j);
    x = (x + coeff * Number(s[j])) % 10;
    y = (y + coeff * Number(s[j + 1])) % 10;
  }

  // Step 3: Compare Alternating Sums
  return x === y;

  // Step 4: Compute Binomial Coefficient Modulo 10
  function binomialMod10(n, k) {
    const i = binomialMod2(n, k);
    const j = binomialMod5(n, k);

    for (let x = 0; x < 10; x++) {
      if (x % 2 === i && x % 5 === j) {
        return x;
      }
    }
    return 0;
  }

  // Step 5: Compute Binomial Coefficient Modulo 2
  function binomialMod2(n, k) {
    return (n & k) === k ? 1 : 0;
  }

  // Step 6: Compute Binomial Coefficient Modulo 5 Using Lookup Table
  function binomialMod5(n, k) {
    const tuples = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 1, 4, 1]];
    let result = 1;

    while (n > 0 || k > 0) {
      const nthd = n % 5;
      const kthd = k % 5;

      if (kthd > nthd) return 0;

      result = (result * tuples[nthd][kthd]) % 5;
      n = (n / 5) | 0;
      k = (k / 5) | 0;
    }
    return result;
  }
};

var s = '3902';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s = '34789';
var expected = false;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s = '34785';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);

var s =
  '059223162476909414787217368465718889720070329493800526721646241144650386182915621907231953557681242064182905239381861256480822308801745728716464165805416272563074544781706952551993233233441914762054761669477046604260289688651191958433480070003587023200105113105431268932582314103774297291977036873970402534522915576764583200175755147667814674754512504911569655037494222537756410610151191257150195557437349822009352297672631564482185262565187532385279714260044303857829021469873315780358707063556775718248201658447824815265573818347949428248619384219498719969693539037903024755075964220907437734386614616595870073534174014967983825396';
var expected = true;
var result = hasSameDigits(s);
console.log(result, result === expected);
