// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/
// T.C.: O(n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn least_interval(tasks: Vec<char>, n: i32) -> i32 {
        let mut max_freq = 0;
        let mut max_freq_count = 0;
        let mut map: HashMap<char, i32> = HashMap::new();
        for task in &tasks {
            *map.entry(*task).or_insert(0) += 1;
        }
        for (_, count) in map {
            if count > max_freq {
                max_freq = count;
                max_freq_count = 0;
            }
            if count == max_freq {
                max_freq_count += 1;
            }
        }

        let part_count = max_freq - 1;
        let part_length = n - (max_freq_count - 1);
        let empty_slots = part_count * part_length;
        let available_slots = (tasks.len() as i32) - max_freq * max_freq_count;
        let remaining_slots = std::cmp::max(0, empty_slots - available_slots);

        return (tasks.len() as i32) + remaining_slots;
    }
}

fn main() {
    // A B _ A B _ A B
    let mut tasks = vec!['A', 'A', 'A', 'B', 'B', 'B'];
    test(tasks, 2, 8);

    // A B A B A B
    tasks = vec!['A', 'A', 'A', 'B', 'B', 'B'];
    test(tasks, 0, 6);

    // A B G A C _ A D _ A E _ A F _ A
    tasks = vec!['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
    test(tasks, 2, 16);

    // A B C A B C A B C D D E
    tasks = vec!['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'];
    test(tasks, 2, 12);
}

fn test(tasks: Vec<char>, n: i32, expected: i32) {
    let result = Solution::least_interval(tasks.clone(), n);

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
