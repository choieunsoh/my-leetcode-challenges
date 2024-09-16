// 937. Reorder Data in Log Files
// https://leetcode.com/problems/reorder-data-in-log-files/description/
// T.C.: O(m * n log n)
// S.C.: O(m * log n)
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    const words = log.split(' ');
    const firstWord = words[1];
    const isDigitLog = !isNaN(firstWord);

    if (isDigitLog) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  letterLogs.sort((a, b) => {
    const [aId, ...aRest] = a.split(' ');
    const [bId, ...bRest] = b.split(' ');
    const aWord = aRest.join(' ');
    const bWord = bRest.join(' ');
    if (aWord === bWord) {
      return aId < bId ? -1 : 1;
    }
    return aWord < bWord ? -1 : 1;
  });

  return letterLogs.concat(digitLogs);
};

var logs = ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'];
var expected = ['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'];
var result = reorderLogFiles(logs);
console.log(result, result.join() === expected.join());

var logs = ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'];
var expected = ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'];
var result = reorderLogFiles(logs);
console.log(result, result.join() === expected.join());
