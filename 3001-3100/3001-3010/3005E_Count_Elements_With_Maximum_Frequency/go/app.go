// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)
package main

import "fmt"

func maxFrequencyElements(nums []int) int {
	result := 0;
	maxFreq := 0;
	freq := [101]int{};
	for _, num := range nums {
		freq[num]++;
		if freq[num] == maxFreq {
			result += maxFreq;
		} else if freq[num] > maxFreq {
			maxFreq = freq[num];
			result = maxFreq;
		}
	}
	return result;
}

func main() {
	nums := []int{1, 2, 3, 4, 5}
	expected := 5
	result := maxFrequencyElements(nums)
	fmt.Println(result, result == expected)

	nums = []int{1, 4, 4, 4, 5, 3, 3, 3}
	expected = 6
	result = maxFrequencyElements(nums)
	fmt.Println(result, result == expected)

	nums = []int{15}
	expected = 1
	result = maxFrequencyElements(nums)
	fmt.Println(result, result == expected)
}