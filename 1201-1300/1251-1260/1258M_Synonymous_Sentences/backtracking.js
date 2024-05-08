// 1258. Synonymous Sentences
// https://leetcode.com/problems/synonymous-sentences/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function (synonyms, text) {
  const graph = new Map();
  for (const [word1, word2] of synonyms) {
    if (!graph.has(word1)) graph.set(word1, []);
    if (!graph.has(word2)) graph.set(word2, []);
    graph.get(word1).push(word2);
    graph.get(word2).push(word1);
  }

  const result = [];
  const words = text.split(' ');
  const wordCount = words.length;
  backtrack(0, []);
  result.sort();
  return result;

  function backtrack(index, sentences) {
    if (index === wordCount) {
      result.push(sentences.join(' '));
      return;
    }

    const word = words[index];
    if (!graph.has(word)) {
      sentences.push(word);
      backtrack(index + 1, sentences);
      sentences.pop();
    } else {
      const synonyms = [];
      dfs(synonyms, word, new Set());
      for (const synonym of synonyms) {
        sentences.push(synonym);
        backtrack(index + 1, sentences);
        sentences.pop();
      }
    }
  }

  function dfs(synonyms, word, visited) {
    visited.add(word);
    synonyms.push(word);
    for (const synonym of graph.get(word)) {
      if (visited.has(synonym)) continue;
      dfs(synonyms, synonym, visited);
    }
  }
};

var synonyms = [
    ['happy', 'joy'],
    ['sad', 'sorrow'],
    ['joy', 'cheerful'],
  ],
  text = 'I am happy today but was sad yesterday';
var expected = [
  'I am cheerful today but was sad yesterday',
  'I am cheerful today but was sorrow yesterday',
  'I am happy today but was sad yesterday',
  'I am happy today but was sorrow yesterday',
  'I am joy today but was sad yesterday',
  'I am joy today but was sorrow yesterday',
];
var result = generateSentences(synonyms, text);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var synonyms = [
    ['happy', 'joy'],
    ['cheerful', 'glad'],
  ],
  text = 'I am happy today but was sad yesterday';
var expected = ['I am happy today but was sad yesterday', 'I am joy today but was sad yesterday'];
var result = generateSentences(synonyms, text);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
