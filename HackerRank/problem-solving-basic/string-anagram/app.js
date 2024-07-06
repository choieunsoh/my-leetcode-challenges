// T.C.: O(n * q)
// S.C.: O(n + q)
/**
 * @param {string[]} dictionary
 * @param {string[]} query
 * @return {number[]}
 */
function stringAnagram(dictionary, query) {
  const wordLengthMap = new Map();
  const wordKeyMap = new Map();
  for (const word of dictionary) {
    const len = word.length;
    if (!wordLengthMap.has(len)) wordLengthMap.set(len, []);
    wordLengthMap.get(len).push(word);

    const wordKey = charsCountKey(word);
    wordKeyMap.set(word, wordKey);
  }

  const result = new Array(query.length).fill(0);
  for (let i = 0; i < query.length; i++) {
    const queryKey = charsCountKey(query[i]);
    const wordList = wordLengthMap.get(query[i].length) ?? [];
    for (const word of wordList) {
      const wordKey = wordKeyMap.get(word);
      if (queryKey === wordKey) {
        result[i]++;
      }
    }
  }
  return result;

  function charsCountKey(word) {
    if (wordKeyMap.has(word)) {
      return wordKeyMap.get(word);
    }

    const a = 'a'.charCodeAt(0);
    const counts = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - a;
      counts[index]++;
    }
    return counts.join();
  }
}

var dictionary = ['hack', 'a', 'rank', 'khac', 'ackh', 'kran', 'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits'],
  query = ['a', 'nark', 'bs', 'hack', 'stair'];
var expected = [2, 2, 0, 3, 1];
var result = stringAnagram(dictionary, query);
console.log(result, result.join() === expected.join());

var dictionary = ['heater', 'cold', 'clod', 'reheat', 'docl'],
  query = ['codl', 'heater', 'abcd'];
var expected = [3, 2, 0];
var result = stringAnagram(dictionary, query);
console.log(result, result.join() === expected.join());

var dictionary = ['listen', 'tow', 'silent', 'lisent', 'two', 'abc', 'no', 'on'],
  query = ['two', 'bca', 'no', 'listen'];
var expected = [2, 1, 2, 3];
var result = stringAnagram(dictionary, query);
console.log(result, result.join() === expected.join());
