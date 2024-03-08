// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)
package main

import "fmt"

func findCenter(edges [][]int) int {
	if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] {
		return edges[0][0]
	}
	return edges[0][1]
}

func main() {
	edges1 := [][]int{{1, 2}, {2, 3}, {4, 2}}
	expected1 := 2
	result1 := findCenter(edges1)
	fmt.Println(result1, result1 == expected1)

	edges2 := [][]int{{1, 2}, {5, 1}, {1, 3}, {1, 4}}
	expected2 := 1
	result2 := findCenter(edges2)
	fmt.Println(result2, result2 == expected2)

	edges3 := [][]int{
		{1, 18}, {18, 2}, {3, 18}, {18, 4}, {18, 5},
		{6, 18}, {18, 7}, {18, 8}, {18, 9}, {18, 10},
		{18, 11}, {12, 18}, {18, 13}, {18, 14}, {15, 18},
		{16, 18}, {17, 18},
	}
	expected3 := 18
	result3 := findCenter(edges3)
	fmt.Println(result3, result3 == expected3)
}