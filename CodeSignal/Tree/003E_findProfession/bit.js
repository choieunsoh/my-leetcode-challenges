// findProfession
// https://www.geeksforgeeks.org/find-profession-in-a-hypothetical-special-situation/
/**
 * @param {number} level
 * @param {number} pos
 * @return {string}
 */
function findProfession(level, pos) {
  let profession = ['Engineer', 'Doctor'];
  const ones = countOnes(pos - 1);
  return profession[ones % 2];

  function countOnes(n) {
    let count = 0;
    while (n) {
      n &= n - 1;
      count++;
    }
    return count;
  }
}

var level = 3,
  pos = 3;
var expected = 'Doctor';
var result = findProfession(level, pos);
console.log(result, result === expected);

var level = 4,
  pos = 2;
var expected = 'Doctor';
var result = findProfession(level, pos);
console.log(result, result === expected);

var level = 8,
  pos = 100;
var expected = 'Engineer';
var result = findProfession(level, pos);
console.log(result, result === expected);

var level = 10,
  pos = 470;
var expected = 'Engineer';
var result = findProfession(level, pos);
console.log(result, result === expected);

var level = 17,
  pos = 5921;
var expected = 'Doctor';
var result = findProfession(level, pos);
console.log(result, result === expected);

var level = 30,
  pos = 163126329;
var expected = 'Doctor';
var result = findProfession(level, pos);
console.log(result, result === expected);
