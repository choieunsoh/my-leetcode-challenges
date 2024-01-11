/**
 *
 * @param {number[]} array
 * @returns {number[]}
 */
function reverse(array) {
  const reversedArray = [...array];
  let left = 0;
  let right = reversedArray.length - 1;
  while (left < right) {
    [reversedArray[left], reversedArray[right]] = [reversedArray[right], reversedArray[left]];
    left++;
    right--;
  }
  return reversedArray;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
console.log(reverse([1, 2, 3, 4, 5, 60]));
