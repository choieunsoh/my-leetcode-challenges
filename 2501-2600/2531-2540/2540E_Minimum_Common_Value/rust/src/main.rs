// 2540. Minimum Common Value
// https://leetcode.com/problems/minimum-common-value/
// T.C.: O(n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn get_common(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        if nums1.last() < nums2.first() || nums1.first() > nums2.last() {
            return -1;
        }
        let mut index1 = 0;
        let mut index2 = 0;
        while index1 < nums1.len() && index2 < nums2.len() {
            if nums1[index1] == nums2[index2] {
                return nums1[index1];
            }
            if nums1[index1] < nums2[index2] {
                index1 += 1;
            } else {
                index2 += 1;
            }
        }

        return -1;
    }
}

fn main() {
    let mut nums1 = vec![1, 2, 3];
    let mut nums2 = vec![2, 4];
    test(nums1, nums2, 2);

    nums1 = vec![1, 2, 3, 6];
    nums2 = vec![2, 3, 4, 5];
    test(nums1, nums2, 2);
}

fn test(nums1: Vec<i32>, nums2: Vec<i32>, expected: i32) {
    let result = Solution::get_common(nums1.clone(), nums2.clone());

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
