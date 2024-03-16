// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/
// T.C.: O(n)
// S.C.: O(n)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn find_max_length(nums: Vec<i32>) -> i32 {
        let mut max_length = 0;
        let mut count = 0;
        let mut map = HashMap::new();
        map.insert(0, -1);
        for (index, num) in nums.iter().enumerate() {
            if num == &0 {
                count -= 1;
            } else {
                count += 1;
            }

            if map.contains_key(&count) {
                max_length = max_length.max((index as i32) - map[&count]);
            } else {
                map.insert(count, index as i32);
            }
        }
        return max_length;
    }
}

fn main() {
    let mut nums = vec![0, 1];
    test(nums, 2);

    nums = vec![0, 1, 0];
    test(nums, 2);

    nums = vec![1, 1, 0, 0, 1, 1, 0, 1, 1];
    test(nums, 6);
}

fn test(nums: Vec<i32>, expected: i32) {
    let result = Solution::find_max_length(nums.clone());

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
