// 3063. Linked List Frequency
// https://leetcode.com/problems/linked-list-frequency/
// T.C.: O(n)
// S.C.: O(n)

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            next: None,
            val,
        }
    }
}

use colored::Colorize;
use colored::ColoredString;
use std::collections::HashMap;

struct Solution;
impl Solution {
    pub fn frequencies_of_elements(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut freq: HashMap<i32, i32> = HashMap::new();
        let mut head = head;

        while let Some(node) = head {
            let count = freq.entry(node.val).or_insert(0);
            *count += 1;
            head = node.next;
        }

        let mut dummy = Box::new(ListNode::new(0));
        let mut cur = &mut dummy;
        for (_, count) in freq {
            cur.next = Some(Box::new(ListNode::new(count)));
            cur = cur.next.as_mut().unwrap();
        }

        dummy.next
    }

    pub fn to_array(head: Option<Box<ListNode>>) -> Vec<i32> {
        let mut result = vec![];
        let mut head = head;
        while let Some(node) = head {
            result.push(node.val);
            head = node.next;
        }
        result.sort();
        result
    }
}

fn main() {
    // [1, 1, 2, 1, 2, 3]
    let mut head = Some(
        Box::new(ListNode {
            val: 1,
            next: Some(
                Box::new(ListNode {
                    val: 1,
                    next: Some(
                        Box::new(ListNode {
                            val: 2,
                            next: Some(
                                Box::new(ListNode {
                                    val: 1,
                                    next: Some(
                                        Box::new(ListNode {
                                            val: 2,
                                            next: Some(Box::new(ListNode::new(3))),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    let mut expected = vec![1, 2, 3];
    test(head, expected);

    // [1, 1, 2, 2, 2];
    head = Some(
        Box::new(ListNode {
            val: 1,
            next: Some(
                Box::new(ListNode {
                    val: 1,
                    next: Some(
                        Box::new(ListNode {
                            val: 2,
                            next: Some(
                                Box::new(ListNode {
                                    val: 2,
                                    next: Some(Box::new(ListNode::new(2))),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    expected = vec![2, 3];
    test(head, expected);

    // [1, 2, 3, 4, 5, 6];
    head = Some(
        Box::new(ListNode {
            val: 1,
            next: Some(
                Box::new(ListNode {
                    val: 2,
                    next: Some(
                        Box::new(ListNode {
                            val: 3,
                            next: Some(
                                Box::new(ListNode {
                                    val: 4,
                                    next: Some(
                                        Box::new(ListNode {
                                            val: 5,
                                            next: Some(Box::new(ListNode::new(6))),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    expected = vec![1, 1, 1, 1, 1, 1];
    test(head, expected);
}

fn test(head: Option<Box<ListNode>>, expected: Vec<i32>) {
    let result = Solution::frequencies_of_elements(head);
    let result_array = Solution::to_array(result);

    println!("\nresult: {}\nassert: {}", array_colored(result_array.clone()), bool_colored(result_array == expected));
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
