// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/
// T.C.: O(n)
// S.C.: O(n)

use colored::Colorize;
use colored::ColoredString;

struct Solution;
impl Solution {
    pub fn custom_sort_string(order: String, s: String) -> String {
        let mut result = String::new();
        let mut map = vec![0; 26];
        let a = 'a' as usize;
        for c in s.chars() {
            map[(c as usize) - a] += 1;
        }
        for c in order.chars() {
            let mut count = map[(c as usize) - a];
            while count > 0 {
                result.push(c);
                count -= 1;
            }
            map[(c as usize) - a] = 0;
        }
        for i in 0..26 {
            while map[i] > 0 {
                result.push((a + i) as u8 as char);
                map[i] -= 1;
            }
        }
        return result;
    }
}

fn main() {
    test("cba".to_string(), "abcd".to_string(), "cbad".to_string());
    test("bcafg".to_string(), "abcd".to_string(), "bcad".to_string());
}

fn test(order: String, s: String, expected: String) {
    let result: String = Solution::custom_sort_string(order, s);

    println!("\nresult: {}\nassert: {}", string_colored(result.clone()), bool_colored(result == expected));
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

fn string_colored(value: String) -> ColoredString {
    return value.to_string().blue();
}
