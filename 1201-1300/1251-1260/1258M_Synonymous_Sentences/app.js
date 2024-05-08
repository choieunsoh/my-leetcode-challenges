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

  const sentences = new Set();
  let queue = [text];
  while (queue.length) {
    const newQueue = [];
    for (const sentence of queue) {
      sentences.add(sentence);

      const words = sentence.split(' ');
      for (let i = 0; i < words.length; i++) {
        if (!graph.has(words[i])) continue;

        for (const synonym of graph.get(words[i])) {
          words[i] = synonym;
          const newText = words.join(' ');
          if (!sentences.has(newText)) {
            newQueue.push(newText);
          }
        }
      }
    }
    queue = newQueue;
  }
  return Array.from(sentences).sort();
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
