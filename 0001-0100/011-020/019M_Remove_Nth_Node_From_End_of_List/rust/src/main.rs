// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let cnt = std::iter::successors(head.as_ref(), |last| last.next.as_ref()).count();
        let mut dummy = Some(Box::new(ListNode { val: 0, next: head }));
        if (cnt as i32) - n >= 0 {
            let mut prev = (0..cnt - (n as usize)).fold(dummy.as_mut(), |cur, _| cur.unwrap().next.as_mut());
            prev.unwrap().next = prev.as_mut().unwrap().next.as_mut().unwrap().next.take();
        }
        dummy.unwrap().next
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
    // [1];
    let mut head = Some(Box::new(ListNode::new(1)));
    let mut expected = Vec::new();
    test(head, 1, expected);

    // [1, 2, 3, 4, 5]
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
                                    next: Some(Box::new(ListNode::new(5))),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    expected = vec![1, 2, 3, 5];
    test(head, 2, expected);

    // [1, 2];
    head = Some(
        Box::new(ListNode {
            val: 1,
            next: Some(Box::new(ListNode::new(2))),
        })
    );
    expected = vec![1];
    test(head, 1, expected);
}

fn test(head: Option<Box<ListNode>>, n: i32, expected: Vec<i32>) {
    let result = Solution::remove_nth_from_end(head, n);
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
