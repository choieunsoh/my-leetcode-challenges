// 2962. Count Subarrays Where Max Element Appears at Least K Times
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
// T.C.: O(n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, k: i32) -> i64 {
        let mut result = 0;
        let max_num = *nums.iter().max().unwrap();
        let mut max_count = 0;
        let mut left = 0;
        for right in 0..nums.len() {
            if nums[right] == max_num {
                max_count += 1;
            }
            while max_count == k {
                if nums[left] == max_num {
                    max_count -= 1;
                }
                left += 1;
            }
            result += left as i64;
        }
        return result;
    }
}

fn main() {
    let mut nums = vec![1, 3, 2, 3, 3];
    test(nums, 2, 6);

    nums = vec![1, 4, 2, 1];
    test(nums, 3, 0);

    nums = vec![2, 2, 2, 2, 1, 3, 3, 2, 2, 1, 1, 3, 1, 1, 2, 3, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 3];
    test(nums, 5, 31);
}

fn test(nums: Vec<i32>, k: i32, expected: i64) {
    let result = Solution::count_subarrays(nums.clone(), k);

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

fn number_colored(value: i64) -> ColoredString {
    return value.to_string().yellow();
}
