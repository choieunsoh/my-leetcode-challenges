const isMatch = (ss, p) => {
  let s = ss.split("").join("");
  if (p.length === 1) return s === p || (p === "." && s.length === p.length);
  if (p.indexOf(".") === -1 && p.indexOf("*") === -1) {
    return s.length === p.length ? s === p : false;
  }

  let c = 0;

  const isLetter = (x) => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122;
  const isDot = (x) => x.charCodeAt(0) === 46;
  const isStar = (x) => x.charCodeAt(0) === 42;
  const replaceAt = (s, index, replacement) => {
    return (
      s.substr(0, index) + replacement + s.substr(index + replacement.length)
    );
  };

  let result = false;
  for (let i = 0; i < p.length; i++) {
    let curr = p[i];
    console.log(curr, c, s[c]);

    let next = i < p.length - 1 ? p[i + 1] : "";

    if (isDot(curr)) {
      //
      console.log("Dot", curr, next, s[c], c, isDot(curr));
      // .
      if (isLetter(s[c]) === false) return false;
      s = replaceAt(s, c, "_");
      c++;

      // *
      if (isStar(next)) {
        while (c < s.length) {
          console.log("Star", curr, next, s[c], c, isStar(next));
          if (isLetter(s[c]) === false) return false;
          s = replaceAt(s, c, "_");
          c++;
        }
      }
    } else if (isLetter(next)) {
      console.log("next letter", curr, s[c], c, i);
      if (s[c] && curr !== s[c]) return false;
      s = replaceAt(s, c, "_");
      console.log(s[c], c, "xxx");
      c++;
      result = true;
    } else {
      // a
      if (s[c] && curr !== s[c]) {
        console.log(curr, s[c], c);
        if (isStar(next)) {
          i++;
          continue;
        }
      }
      c++;

      // *
      if (isStar(next)) {
        while (c < s.length) {
          console.log("Star", curr, next, s[c], c, isStar(next));
          if (s[c] && curr !== s[c]) break;
          c++;
        }
        i++;
      }
    }
  }

  console.log("step 2", s.length, c);
  if (s.length > c) return false;

  c = s.length - 1;
  for (let i = p.length - 1; i >= 0; i--) {
    if (isLetter(p[i]) === false) break;
    console.log(i, c, s[c], p[i]);
    if (c >= 0 && s[c] !== p[i]) return false;
    c--;
  }

  return true;
};

let s2 = "";
let p = "";
s2 = "aa";
p = "aa";
console.log(s2);
console.log(p);
console.log(isMatch(s2, p));
