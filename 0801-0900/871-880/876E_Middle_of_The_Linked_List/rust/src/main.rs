// 876. Middle of The Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// T.C.: O(n)
// S.C.: O(1)

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

struct Solution;
impl Solution {
    pub fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut slow = &head;
        let mut fast = &head;
        while slow.is_some() && fast.is_some() && fast.as_ref().unwrap().next.is_some() {
            slow = &slow.as_ref().unwrap().next;
            fast = &fast.as_ref().unwrap().next.as_ref().unwrap().next;
        }
        return slow.clone();
    }

    pub fn to_array(head: Option<Box<ListNode>>) -> Vec<i32> {
        let mut result = vec![];
        let mut head = head;
        while let Some(node) = head {
            result.push(node.val);
            head = node.next;
        }
        result
    }
}

fn main() {
    // [1, 2, 3, 4, 5]
    let mut head = Some(
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
                                    next: Some(Box::new(ListNode::new(5))),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    let mut expected = vec![3, 4, 5];
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
    expected = vec![4, 5, 6];
    test(head, expected);
}

fn test(head: Option<Box<ListNode>>, expected: Vec<i32>) {
    let result = Solution::middle_node(head);
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
