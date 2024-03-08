// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)
use colored::Colorize;
use colored::ColoredString;
use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn max_frequency_elements(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut max_freq = 0;
        let mut freq = vec![0; 101];
        for num in nums {
            freq[num as usize] += 1;
            if freq[num as usize] > max_freq {
                max_freq = freq[num as usize];
                result = max_freq;
            } else if freq[num as usize] == max_freq {
                result += max_freq;
            }
        }
        return result;
    }

    pub fn max_frequency_elements_v2(nums: Vec<i32>) -> i32 {
        let mut freq: HashMap<i32, i32> = HashMap::with_capacity(nums.len());
        let mut max_freq: i32 = 0;
        let mut max: i32 = 0;
        for n in nums.iter() {
            freq.entry(*n)
                .and_modify(|count| {
                    *count += 1;
                })
                .or_insert(1);
        }
        for (k, v) in freq.iter() {
            if *v > max_freq {
                max_freq = *v;
                max = 1;
            } else if *v == max_freq {
                max += 1;
            }
        }
        return max * max_freq;
    }
}

fn main() {
    let mut nums = vec![1, 2, 2, 3, 1, 4];
    test(nums, 4);

    nums = vec![1, 2, 3, 5, 4];
    test(nums, 5);

    nums = vec![1, 2, 2, 3, 1, 4, 3, 4, 5, 5];
    test(nums, 10);

    nums = vec![15];
    test(nums, 1);
}

fn test(nums: Vec<i32>, expected: i32) {
    let result = Solution::max_frequency_elements_v2(nums.clone());

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
