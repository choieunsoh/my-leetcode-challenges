# 192. Word Frequency
# https://leetcode.com/problems/word-frequency/description/
# T.C.: O(n log n)
# S.C.: O(n)
# Read from the file words.txt and output the word frequency list to stdout.
tr -s ' ' '\n' < words.txt | sort | uniq -c | sort -nr | awk '{print $2, $1}'
