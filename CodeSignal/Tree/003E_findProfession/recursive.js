// findProfession
// https://www.geeksforgeeks.org/find-profession-in-a-hypothetical-special-situation/
/**
 * @param {number} level
 * @param {number} pos
 * @return {string}
 */
function findProfession(level, pos) {
  if (level == 1) return 'Engineer';
  const profession = ['Engineer', 'Doctor'];

  const parentProfession = findProfession(level - 1, (pos + 1) >> 1);
  if (parentProfession === 'Doctor') {
    return profession[pos & 1];
  }
  return profession[(pos + 1) & 1];
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
