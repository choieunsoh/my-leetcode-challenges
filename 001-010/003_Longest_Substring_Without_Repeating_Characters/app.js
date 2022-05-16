const lengthOfLongestSubstringV1 = (s) => {
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    const seen = { [s[i]]: s[i] };
    for (let j = i + 1; j < s.length; j++) {
      if (seen[s[i]].indexOf(s[j]) !== -1) break;
      seen[s[i]] += s[j];
    }
    const len = seen[s[i]].length;
    if (len > length) length = len;
  }
  return length;
};
const lengthOfLongestSubstringV2 = (s) => {
  const charSet = new Set();

  let l = 0;
  let max = 0;

  for (let r = 0; r <= s.length - 1; r++) {
    while (charSet.has(s[r])) {
      console.log("A", charSet);
      charSet.delete(s[l]);
      console.log("B", charSet);
      l++;
    }
    charSet.add(s[r]);
    console.log(charSet);
    max = Math.max(max, r - l + 1);
  }
  return max;
};
const lengthOfLongestSubstring = (s) => {
  let text = "";
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let x = text.indexOf(s[i]);
    if (x !== -1) {
      text = text.substring(x);
    }
    text += s[i];
    if (text.length > max) max = text.length;
    console.log(text, max);
  }
  return max;
};
var lengthOfLongestSubstring2 = function (s) {
  let maxStr = 0;
  let currStr = "";
  for (const letter of s) {
    const repeatIndex = currStr.indexOf(letter);
    if (repeatIndex !== -1) {
      currStr = currStr.slice(repeatIndex + 1);
    }
    currStr = currStr.concat(letter);
    if (currStr.length > maxStr) {
      maxStr = currStr.length;
    }
  }
  return maxStr;
};

let s = "bbtablud";
s = "abcabcbb";
console.log(s);
console.log(lengthOfLongestSubstring2(s));
