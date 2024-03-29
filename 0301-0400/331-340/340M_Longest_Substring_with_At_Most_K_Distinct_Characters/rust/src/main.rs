// 340. Longest Substring with At Most K Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// T.C.: O(n)
// S.C.: O(k)
use colored::Colorize;
use colored::ColoredString;
struct Solution;

use std::collections::HashMap;

impl Solution {
    fn length_of_longest_substring_k_distinct(s: String, k: i32) -> i32 {
        let mut freq: HashMap<char, i32> = HashMap::new();
        let mut left = 0;
        let mut right = 0;
        let mut result = 0;

        let chars: Vec<char> = s.chars().collect();

        while right < chars.len() {
            *freq.entry(chars[right]).or_insert(0) += 1;

            if (freq.len() as i32) <= k {
                result = result.max((right - left + 1) as i32);
            }

            if (freq.len() as i32) > k {
                if let Some(count) = freq.get_mut(&chars[left]) {
                    *count -= 1;
                    if *count <= 0 {
                        freq.remove(&chars[left]);
                    }
                }
                left += 1;
            }
            right += 1;
        }

        result
    }
}

fn main() {
    let mut s = String::from("eceba");
    test(s, 2, 3);

    s = String::from("aa");
    test(s, 1, 2);

    s = String::from("abaccc");
    test(s, 2, 4);
}

fn test(s: String, k: i32, expected: i32) {
    let result = Solution::length_of_longest_substring_k_distinct(s.clone(), k);

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
