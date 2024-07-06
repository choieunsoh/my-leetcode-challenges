// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
function decryptPassword(s) {
  // Convert the string to an array of characters
  const chars = s.split('');
  let i = 0;

  // Find the position until where the digits (non-zero) are present
  while (i < chars.length && !isNaN(chars[i]) && chars[i] !== '0') {
    i++;
  }

  // Replace '0's with the original digits from the beginning
  let numberCount = 0;
  for (let j = i; j < chars.length; j++) {
    if (chars[j] === '0') {
      chars[j] = chars[i - numberCount - 1];
      numberCount++;
    }
  }

  // Swap the characters marked by '*'
  for (let j = i; j < chars.length; j++) {
    if (chars[j] === '*') {
      [chars[j - 1], chars[j - 2]] = [chars[j - 2], chars[j - 1]];
    }
  }

  // Join the array back into a string and remove all '*'
  return chars.slice(i).join('').replace(/\*/g, '');
}

var s = '43Ah*ck0rr0nk';
var expected = 'hAck3rr4nk';
var result = decryptPassword(s);
console.log(result, result === expected);

var s = '51Pa*0Lp*0e';
var expected = 'aP1pL5e';
var result = decryptPassword(s);
console.log(result, result === expected);

var s = 'pTo*Ta*O';
var expected = 'poTaTO';
var result = decryptPassword(s);
console.log(result, result === expected);

var s = 'pTo*Ta*O';
var expected = 'poTaTO';
var result = decryptPassword(s);
console.log(result, result === expected);
