function count1s32(n) {
  let count = 0;
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  n = (n + (n >> 4)) & 0x0f0f0f0f;
  n = n + (n >> 8);
  n = n + (n >> 16);
  count += n & 0x3f;
  return count;
}

function count1s(n) {
  return n.toString(2).replace(/0/g, '').length;
}

function bitCount(n) {
  var bits = 0;
  while (n !== 0) {
    bits += bitCount32(n | 0);
    n /= 0x100000000;
  }
  return bits;
}

function bitCount32(n) {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
}
