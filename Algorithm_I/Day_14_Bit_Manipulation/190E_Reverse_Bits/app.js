var reverseBits = function (n) {
  n = n.split("");
  let l = 0;
  let r = n.length - 1;
  while (l < r) {
    [n[l], n[r]] = [n[r], n[l]];
    l++;
    r--;
  }
  return n.join("");
};
var x = "00000010100101000001111010011100";
console.log(x);
console.log(reverseBits(x));
