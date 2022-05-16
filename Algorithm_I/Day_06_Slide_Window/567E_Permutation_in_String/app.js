var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let char1 = new Array(26).fill(0);
  let char2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    char1[s1.charCodeAt(i) - 97]++;
    char2[s2.charCodeAt(i) - 97]++;
  }

  const match = (c1, c2) => {
    for (let i = 0; i < 26; i++) {
      if (c1[i] !== c2[i]) return false;
    }
    return true;
  };

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (match(char1, char2)) return true;
    char2[s2.charCodeAt(i) - 97]--;
    char2[s2.charCodeAt(i + s1.length) - 97]++;
  }

  return match(char1, char2);
};
var s1 = "adc",
  s2 = "dcda";

console.log(s1, s2);
console.log(checkInclusion(s1, s2));
