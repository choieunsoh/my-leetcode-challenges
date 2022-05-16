var isValid = function (s) {
  s = s.replace(/\s/gi, "");
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const arr = [];
  for (const c of s) {
    if (map[c]) {
      arr.push(c);
    } else if (map[arr.pop()] !== c) {
      return false;
    }
  }
  return arr.length === 0;
};

var s = " { { } [ ] [ [ [ ] ] ] } ";
console.log(isValid(s));
