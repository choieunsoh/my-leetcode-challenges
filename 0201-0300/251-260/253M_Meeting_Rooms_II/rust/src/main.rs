// 253. Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// T.C.: O(N log N)
// S.C.: O(N)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn min_meeting_rooms(intervals: Vec<Vec<i32>>) -> i32 {
        let mut used_rooms = 0;

        let mut start_intervals = intervals
            .iter()
            .map(|x| x[0])
            .collect::<Vec<i32>>();
        start_intervals.sort_by(|a, b| a.cmp(&b));

        let mut end_intervals = intervals
            .iter()
            .map(|x| x[1])
            .collect::<Vec<i32>>();
        end_intervals.sort_by(|a, b| a.cmp(&b));

        let mut start_index = 0;
        let mut end_index = 0;
        while start_index < intervals.len() {
            if start_intervals[start_index] >= end_intervals[end_index] {
                used_rooms -= 1;
                end_index += 1;
            }
            start_index += 1;
            used_rooms += 1;
        }
        return used_rooms;
    }
}

fn main() {
    let mut nums = vec![vec![0, 30], vec![5, 10], vec![15, 20]];
    test(nums, 2);

    nums = vec![vec![7, 10], vec![2, 4]];
    test(nums, 1);

    nums = vec![vec![2, 11], vec![6, 16], vec![11, 16]];
    test(nums, 2);
}

fn test(nums: Vec<Vec<i32>>, expected: i32) {
    let result = Solution::min_meeting_rooms(nums.clone());

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
