// T.C.: O(n)
// S.C.: O(1)

const P = 131;
const MOD = 1e9 + 7;
const powerOfP = [];
let power = 1;
for (let i = 0; i < 10; i++) {
  powerOfP.push(power);
  power = (power * P) % MOD;
}

/**
 * @param {string[][]} authEvents
 * @return {number[]}
 */
function taskOfParing(authEvents) {
  const zero = '0'.charCodeAt(0);
  const nine = '9'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);

  const result = [];
  let passwordHash = 0;
  let currentPassword = '';
  for (const [op, arg] of authEvents) {
    if (op === 'setPassword') {
      passwordHash = computeHash(arg);
      currentPassword = arg;
    } else if (op === 'authorize') {
      const checkHash = Number(arg);
      if (passwordHash === checkHash) {
        result.push(1);
      } else {
        const appendedHash = computeHash(currentPassword + '0') - zero;
        const diff = checkHash - appendedHash;
        if (isValidAppendChar(diff)) {
          result.push(1);
        } else {
          result.push(0);
        }
      }
    }
  }
  return result;

  function isValidAppendChar(diff) {
    return (diff >= zero && diff <= nine) || (diff >= A && diff <= Z) || (diff >= a && diff <= z);
  }

  function computeHash(s) {
    const n = s.length;
    let hash = 0;
    for (let i = 0; i < n; i++) {
      const fx = s.charCodeAt(i);
      const Pn = powerOfP[n - 1 - i];
      hash = (hash + fx * Pn) % MOD;
    }
    return hash;
  }
}

var authEvents = [
  ['setPassword', 'cAr1'],
  ['authorize', '223691457'],
  ['authorize', '303580761'],
  ['authorize', '100'],
  ['setPassword', 'd'],
  ['authorize', '100'],
];
var expected = [1, 1, 0, 1];
var result = taskOfParing(authEvents);
console.log(result, result.join() === expected.join());

var authEvents = [
  ['setPassword', '000A'],
  ['authorize', '108738450'],
  ['authorize', '108738449'],
  ['authorize', '244736787'],
];
var expected = [0, 1, 1];
var result = taskOfParing(authEvents);
console.log(result, result.join() === expected.join());

var authEvents = [
  ['setPassword', '1'],
  ['setPassword', '2'],
  ['setPassword', '3'],
  ['authorize', '49'],
  ['authorize', '50'],
];
var expected = [0, 0];
var result = taskOfParing(authEvents);
console.log(result, result.join() === expected.join());
