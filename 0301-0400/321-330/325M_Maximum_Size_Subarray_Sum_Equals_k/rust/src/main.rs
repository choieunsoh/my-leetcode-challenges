// 325. Maximum Size Subarray Sum Equals k
// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/
// T.C.: O(N)
// S.C.: O(N)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn max_sub_array_len(nums: Vec<i32>, k: i32) -> i32 {
        let mut max_length = 0;
        let mut prefix_sum = 0;
        let mut map = HashMap::new();
        for (index, num) in nums.iter().enumerate() {
            prefix_sum += num;
            if prefix_sum == k {
                max_length = index + 1;
            }
            if let Some(prev_index) = map.get(&(prefix_sum - k)) {
                max_length = max_length.max(index - prev_index);
            }
            if !map.contains_key(&prefix_sum) {
                map.insert(prefix_sum, index);
            }
        }
        return max_length as i32;
    }
}

fn main() {
    let mut nums = vec![1, -1, 5, -2, 3];
    test(nums, 3, 4);

    nums = vec![-2, -1, 2, 1];
    test(nums, 1, 2);

    nums = vec![1, 0, -1];
    test(nums, -1, 2);
}

fn test(nums: Vec<i32>, k: i32, expected: i32) {
    let result = Solution::max_sub_array_len(nums.clone(), k);

    println!("\nresult: {}\nassert: {}", number_colored(result), bool_colored(result == expected));
}

fn bool_colored(value: bool) -> ColoredString {
    let text;
    if value {
        text = value.to_string().green();
    } else {
        text = value.to_string().red();
    }
    return text;
}

fn number_colored(value: i32) -> ColoredString {
    return value.to_string().yellow();
}
