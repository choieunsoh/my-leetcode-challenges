// findSubstrings
// https://gist.github.com/jsaluja/dcf19a1af2e297dccf0198b35d906fe8
//
function findSubstrings(words, parts) {
  const partSet = new Set(parts);
  const lengthSet = new Set(parts.map((part) => part.length).sort((a, b) => b - a));
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    map.set(word, []);
    for (const len of lengthSet) {
      for (let j = 0; j + len <= word.length; j++) {
        const sub = word.substring(j, j + len);
        map.get(word).push(sub);
      }
    }
  }

  const result = [];
  for (const word of words) {
    let found = false;
    const list = map.get(word);
    for (let i = 0; !found && i < list.length; i++) {
      const sub = list[i];
      if (!partSet.has(sub)) continue;
      result.push(word.replace(sub, `[${sub}]`));
      found = true;
    }
    if (!found) result.push(word);
  }
  return result;
}

var words = ['Apple', 'Melon', 'Orange', 'Watermelon'],
  parts = ['a', 'mel', 'lon', 'el', 'An'];
var expected = ['Apple', 'Me[lon]', 'Or[a]nge', 'Water[mel]on'];
var result = findSubstrings(words, parts);
console.log(result, result.join() === expected.join());
