// 1750. Minimum Length of String After Deleting Similar Ends
// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/
// T.C.: O(n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn minimum_length(s: String) -> i32 {
        let s = s.as_bytes();
        let mut left = 0;
        let mut right = s.len() - 1;
        while left < right && s[left] == s[right] {
            let ch = s[left];
            while left <= right && s[left] == ch {
                left += 1;
            }

            while left < right && s[right] == ch {
                right -= 1;
            }
        }

        return (right + 1 - left) as i32;
    }
}

fn main() {
    let mut s = String::from("ca");
    test(s, 2);

    s = String::from("cabaabac");
    test(s, 0);

    s = String::from("aabccabba");
    test(s, 3);

    s = String::from("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb");
    test(s, 1);

    s = String::from("abbbbbbbbbbbbbbbbbbba");
    test(s, 0);
}

fn test(s: String, expected: i32) {
    let result = Solution::minimum_length(s);

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
