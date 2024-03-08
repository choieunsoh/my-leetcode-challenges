# 3005. Count Elements With Maximum Frequency
# https://leetcode.com/problems/count-elements-with-maximum-frequency/
# T.C.: O(n)
# S.C.: O(n)
# @param {Integer[]} nums
# @return {Integer}
def max_frequency_elements_v1(nums)
  result = 0
  max_freq = 0
  freq = Array.new(101, 0)
  for num in nums
    freq[num] += 1
    if freq[num] > max_freq
      max_freq = freq[num]
      result = max_freq
    elsif freq[num] == max_freq
      result += max_freq
    end
  end
  return result
end

# @param {Integer[]} nums
# @return {Integer}
def max_frequency_elements(nums)
    tmp = {}
    max = 0
    nums.each do |num|
        tmp[num] ? tmp[num] += 1 : tmp[num] = 1
        max = tmp[num] if tmp[num] > max
    end
    tmp.select! { |k, v| v == max }
    tmp.count * max
end

# @param {Integer[]} nums
# @param {Integer} expected
# @return {Integer}
def test(nums, expected)
  result = max_frequency_elements(nums)
  puts result, result == expected, "\n"
end

test([1, 2, 2, 3, 1, 4], 4)
test([1, 2, 3, 4, 5], 5)
test([15], 1)
