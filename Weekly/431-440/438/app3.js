/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  let n = s.length;
  if (n === 1) return false;
  const c = n - 2;

  const nums = [...s].map(Number);
  const coeff = binomialCoefficient(BigInt(c));

  let a = 0n;
  let b = 0n;
  for (let i = 0; i < n - 1; i++) {
    a += (BigInt(nums[i]) * coeff[i]) % 10n;
    b += (BigInt(nums[i + 1]) * coeff[i]) % 10n;
  }
  return a % 10n === b % 10n;

  function binomialCoefficient(n) {
    let nums = [1n];
    let prev = 1n;
    for (let k = 1n; k <= n; k++) {
      prev = (prev * (n - k + 1n)) / k;
      nums.push(prev);
    }
    return nums;
  }
};

/*
a b c d
(a+b) (b+c) (c+d)
(a+2b+c) (b+2c+d)

a b c d e
(a+b) (b+c) (c+d) (d+e)
(a+2b+c) (b+2c+d) (c+2d+e)
(a+3b+3c+d) (b+3c+3d+e)
*/

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
