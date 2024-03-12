// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
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
    pub fn remove_zero_sum_sublists(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return head;
        }

        let mut dummy = Box::new(ListNode::new(0));
        dummy.next = head;

        let mut node_value_sum_map = HashMap::new();
        node_value_sum_map.insert(0, dummy.as_ref());

        let mut sum = 0;
        let mut d = dummy.next.as_ref();
        while let Some(node) = d {
            sum += node.val;
            d = node.next.as_ref();
            node_value_sum_map.insert(sum, node.as_ref());
        }

        let mut result = Box::new(ListNode::new(0));
        let mut d = Some(&mut result);
        sum = 0;
        while let Some(node) = d {
            sum += node.val;
            if let Some(map_node) = node_value_sum_map.get(&sum) {
                node.next = match map_node.next.as_ref() {
                    Some(next) => Some(Box::new(ListNode::new(next.val))),
                    None => None,
                };
            }
            d = node.next.as_mut();
        }

        result.next
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
    // [1, 2, -3, 3, 1];
    let mut head = Some(
        Box::new(ListNode {
            val: 1,
            next: Some(
                Box::new(ListNode {
                    val: 2,
                    next: Some(
                        Box::new(ListNode {
                            val: -3,
                            next: Some(
                                Box::new(ListNode {
                                    val: 3,
                                    next: Some(Box::new(ListNode::new(1))),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    let mut expected = vec![3, 1];
    test(head, expected);

    // [1, 2, 3, -3, 4];
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
                                    val: -3,
                                    next: Some(Box::new(ListNode::new(4))),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    expected = vec![1, 2, 4];
    test(head, expected);

    // [1, 2, 3, -3, -2];
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
                                    val: -4,
                                    next: Some(Box::new(ListNode::new(-2))),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    expected = vec![1];
    test(head, expected);

    // [1, 2, 3, -3, -2, -1, 5];
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
                                    val: -3,
                                    next: Some(
                                        Box::new(ListNode {
                                            val: -2,
                                            next: Some(
                                                Box::new(ListNode {
                                                    val: -1,
                                                    next: Some(Box::new(ListNode::new(5))),
                                                })
                                            ),
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
    expected = vec![5];
    test(head, expected);
}

fn test(head: Option<Box<ListNode>>, expected: Vec<i32>) {
    let result = Solution::remove_zero_sum_sublists(head);
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
