// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
// T.C.: O(n + m)
// S.C.: O(n)
use colored::Colorize;
use colored::ColoredString;
struct Solution;

use std::collections::HashSet;

impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        if nums1.len() < nums2.len() {
            return Self::intersection(nums2, nums1);
        }
        let mut result = HashSet::new();
        let mut nums = HashSet::new();
        for num in nums1.clone() {
            nums.insert(num);
        }
        for num in nums2.clone() {
            if nums.contains(&num) {
                result.insert(num);
            }
        }
        return Vec::from_iter(result);
    }
}

fn main() {
    let mut nums1 = vec![1, 2, 2, 1];
    let mut nums2 = vec![2, 2];
    let mut expected = vec![2];
    test(nums1, nums2, expected);

    nums1 = vec![4, 9, 5];
    nums2 = vec![9, 4, 9, 8, 4];
    expected = vec![4, 9];
    test(nums1, nums2, expected);
}

fn test(nums1: Vec<i32>, nums2: Vec<i32>, expected: Vec<i32>) {
    let result = Solution::intersection(nums1.clone(), nums2.clone());

    println!("\nresult: {}\nassert: {}", array_colored(result.clone()), bool_colored(result == expected));
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

fn array_colored(nums: Vec<i32>) -> ColoredString {
    let text = format!(
        "[{}]",
        nums
            .iter()
            .map(|x| x.to_string())
            .collect::<Vec<String>>()
            .join(", ")
    );
    return text.yellow();
}
