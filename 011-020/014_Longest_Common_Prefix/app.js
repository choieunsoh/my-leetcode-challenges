const longestCommonPrefix1 = (strs) => {
  if (strs?.length === 0) return "";
  const len = strs.reduce((len, str) => {
    return str.length < len ? str.length : len;
  }, Number.MAX_SAFE_INTEGER);

  let result = "";
  for (let i = 0; i < len; i++) {
    if (strs[0][i]) {
      result += strs[0][i];
      if (strs.every((str) => str.startsWith(result)) === false) {
        return result.substring(0, i);
      }
    }
  }

  return result;
};
const longestCommonPrefix = (strs) => {
  if (strs?.length === 0) return "";

  let i = 0;
  while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) {
    i++;
  }

  return strs[0].substring(0, i);
};

let strs = ["flower", "flow", "flight"];
//strs = ["", "dog", "racecar", "car"];

console.log(strs.join(" "));
console.log("A", longestCommonPrefix(strs));
