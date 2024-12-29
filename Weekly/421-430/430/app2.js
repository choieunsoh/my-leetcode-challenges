/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
  const memo = new Map();
  let maxStr = '';
  for (let len = 1; len <= word.length - (numFriends - 1); len++) {
    for (let start = 0; start <= word.length - len; start++) {
      const candidate = word.slice(start, start + len);
      const parts = Math.min(start, numFriends - 1);
      if (canSplit(0, start, parts) && canSplit(start + len, word.length, numFriends - 1 - parts)) {
        if (candidate > maxStr) maxStr = candidate;
      }
    }
  }
  return maxStr;

  function canSplit(start, end, parts) {
    const key = `${start}-${end}-${parts}`;
    if (memo.has(key)) return memo.get(key);

    if (parts === 0) return start === end;
    if (end - start < parts) return false;

    for (let i = start + 1; i <= end - parts + 1; i++) {
      if (canSplit(i, end, parts - 1)) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  }
};

var word = 'dbca',
  numFriends = 2;
var expected = 'dbc';
var result = answerString(word, numFriends);
console.log(result, result === expected);

var word = 'gggg',
  numFriends = 4;
var expected = 'g';
var result = answerString(word, numFriends);
console.log(result, result === expected);

var word = 'lnqlacpaqalbrdqattat',
  numFriends = 12;
var expected = 'ttat';
var result = answerString(word, numFriends);
console.log(result, result === expected);

var word = 'gdce',
  numFriends = 3;
var expected = 'gd';
var result = answerString(word, numFriends);
console.log(result, result === expected);
