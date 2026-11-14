// 3420. Count Non-Decreasing Subarrays After K Operations
// https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function (nums, k) {
  const n = nums.length;
  let result = 0;
  let operations = 0;
  // Maintain the window maximum with a priority queue of { val, idx }
  const q = new MaxPriorityQueue((item) => item.val);
  // Record the set of elements covered by this index
  const cnt = Array.from({ length: n }, () => []);
  // Index of the first greater-or-equal element to the right
  const pos = new Array(n).fill(n);
  // Decreasing monotonic stack
  const st = [];

  let left = 0;
  for (let right = 0; right < n; right++) {
    // Maintain the monotonic stack
    while (st.length > 0 && nums[right] >= nums[st[st.length - 1]]) {
      pos[st[st.length - 1]] = right;
      st.pop();
    }
    // The stack top is the nearest greater element to the left of nums[right]
    if (st.length > 0) {
      cnt[st[st.length - 1]].push(right);
    }
    st.push(right);

    // The priority queue front is the window maximum
    q.enqueue({ val: nums[right], idx: right });
    // Adding nums[right] increases the operation count
    operations += Math.max(0, q.front().val - nums[right]);

    // The minimum operation count exceeds k; shrink the window
    while (operations > k) {
      // Removing nums[left] from the window decreases the operation count
      for (const i of cnt[left]) {
        // Subtract the contribution
        operations -= (nums[left] - nums[i]) * (Math.min(pos[i], right + 1) - i);
      }
      left++;
    }

    // Remove elements with indices less than left from the priority queue
    while (!q.isEmpty() && q.front().idx < left) {
      q.dequeue();
    }

    // There are right - left + 1 valid contiguous subarrays ending at right
    result += right - left + 1;
  }

  return result;
};

var nums = [6, 3, 1, 2, 4, 4],
  k = 7;
var expected = 17;
var result = countNonDecreasingSubarrays(nums, k);
console.log(result, result === expected);

var nums = [6, 3, 1, 3, 6],
  k = 4;
var expected = 12;
var result = countNonDecreasingSubarrays(nums, k);
console.log(result, result === expected);
