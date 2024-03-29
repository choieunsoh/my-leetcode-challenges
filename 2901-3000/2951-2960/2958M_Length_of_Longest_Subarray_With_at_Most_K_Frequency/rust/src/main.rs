// 2958. Length of Longest Subarray With at Most K Frequency
// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
// T.C.: O(n)
// S.C.: O(n)
use colored::Colorize;
use colored::ColoredString;
use std::collections::HashMap;
use std::cmp::max;

struct Solution;

impl Solution {
    pub fn max_subarray_length(nums: Vec<i32>, k: i32) -> i32 {
        let mut result = 0;
        let mut freq: HashMap<i32, i32> = HashMap::new();
        let mut left = 0;
        for right in 0..nums.len() {
            let right_num = nums[right];
            *freq.entry(right_num).or_insert(0) += 1;
            while *freq.get(&right_num).unwrap_or(&0) > k {
                let left_num = nums[left];
                *freq.entry(left_num).or_insert(0) -= 1;
                left += 1;
            }
            result = max(result, (right - left + 1) as i32);
        }
        return result;
    }
}

fn main() {
    let mut nums = vec![1, 2, 3, 1, 2, 3, 1, 2];
    test(nums, 2, 6);

    nums = vec![1, 2, 1, 2, 1, 2, 1, 2];
    test(nums, 1, 2);

    nums = vec![5, 5, 5, 5, 5, 5, 5];
    test(nums, 4, 4);
}

fn test(nums: Vec<i32>, k: i32, expected: i32) {
    let result = Solution::max_subarray_length(nums.clone(), k);

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
