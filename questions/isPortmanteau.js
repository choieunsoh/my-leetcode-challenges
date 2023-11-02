var isPortmanteau = function (first, second, third) {
  if (third[0] !== first[0]) {
    return isValid(second, first, third);
  }

  if (first[0] === second[0]) {
    const firstValid = isValid(first, second, third);
    const secondValid = isValid(second, first, third);
    return firstValid || secondValid;
  }

  return isValid(first, second, third);

  function isValid(first, second, third) {
    let firstIndex = 0;
    let thirdIndex = 0;
    while (firstIndex < first.length && first[firstIndex] === third[thirdIndex]) {
      firstIndex++;
      thirdIndex++;
    }

    let secondIndex = second.length - 1;
    let thirdRightIndex = third.length - 1;
    while (thirdRightIndex >= 0 && thirdRightIndex > thirdIndex && third[thirdRightIndex] === second[secondIndex]) {
      secondIndex--;
      thirdRightIndex--;
    }

    const word = first.substring(0, firstIndex) + second.substring(secondIndex);
    return secondIndex > 0 && word === third;
  }
};

var result = isPortmanteau('smoke', 'fog', 'smog');
var expected = true;
console.log(result, result === expected);

var result = isPortmanteau('snake', 'fog', 'smog');
var expected = false;
console.log(result, result === expected);

var result = isPortmanteau('lunch', 'breakfast', 'brunch');
var expected = true;
console.log(result, result === expected);

var result = isPortmanteau('shrink', 'inflation', 'shrinkflation');
var expected = true;
console.log(result, result === expected);

var result = isPortmanteau('foot', 'ball', 'football');
var expected = false;
console.log(result, result === expected);

var result = isPortmanteau('strong', 'small', 'smang');
var expected = true;
console.log(result, result === expected);

var result = isPortmanteau('strong', 'small', 'strang');
var expected = false;
console.log(result, result === expected);

console.log(isPortmanteau('fog', 'smoke', 'smog') == true);
console.log(isPortmanteau('smoke', 'fog', 'smog') == true);
console.log(isPortmanteau('motor', 'hotel', 'motel') == true);
console.log(isPortmanteau('branch', 'much', 'brunch') == false);
console.log(isPortmanteau('shrink', 'inflation', 'shrinkflation') == true);
console.log(isPortmanteau('skimp', 'inflation', 'skimpflation') == true);
console.log(isPortmanteau('miserable', 'flimsy', 'mimsy') == true);
console.log(isPortmanteau('puppies', 'cat', 'puppi') == false);
console.log(isPortmanteau('cat', 'dog', 'otter') == false);
console.log(isPortmanteau('ten', 'at', 'tent') == true);
console.log(isPortmanteau('at', 'ten', 'tent') == true);
// special cases
// proposed is one of the words
console.log(isPortmanteau('bartender', 'ten', 'bartender') == false);
console.log(isPortmanteau('bartender', 'tender', 'bartender') == false);
console.log(isPortmanteau('bartender', 'tenderness', 'bartender') == false);
// compounds aren't portmanteaus
console.log(isPortmanteau('foot', 'ball', 'football') == false);
console.log(isPortmanteau('ski', 'water', 'waterski') == false);
console.log(isPortmanteau('bat', 'man', 'batman') == false);
console.log(isPortmanteau('man', 'bat', 'batman') == false);
console.log(isPortmanteau('rent', 'tent', 'tent') == false);
console.log(isPortmanteau('rent', 'tent', 'rent') == false);
console.log(isPortmanteau('', 'test', 'test') == false);
console.log(isPortmanteau('test', '', 'test') == false);
console.log(isPortmanteau('test', 'test', 'test') == false);
console.log(isPortmanteau('', '', 'test') == false);
console.log(isPortmanteau('', '', '') == false);

function isPortmanteau(word1, word2, proposed) {
  function check(w1, w2) {
    let p1 = 0;
    for (; p1 < w1.length && p1 < proposed.length && proposed[p1] === w1[p1]; p1++) {}
    p1--; // the loop iterated 1 too far

    let p2 = proposed.length - 1;
    for (let s2 = w2.length - 1; s2 >= 0 && proposed[p2] === w2[s2]; s2--, p2--) {}

    return p1 >= p2 && p2 < proposed.length - 1;
  }

  // Rule out compounds
  if (proposed === word1 + word2) return false;
  if (proposed === word2 + word1) return false;

  // The portmanteau can't exactly match either source word
  if (proposed === word1 || proposed === word2) return false;

  return check(word1, word2) || check(word2, word1);
}
